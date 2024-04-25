import inspect
import sys
from typing import Any, get_type_hints

from strawberry.annotation import StrawberryAnnotation
from wagtail.blocks.stream_block import StreamValue
from wagtail.blocks.struct_block import StructValue
from wagtail.models import Page


def find_strawberry_types() -> dict[str, type]:
    """
    Finds Strawberry types in the specified module.
    """
    module = sys.modules["esterlol.api.types"]
    return {
        obj.__strawberry_definition__.origin.__name__: obj
        for _, obj in inspect.getmembers(module)
        if inspect.isclass(obj) and hasattr(obj, "__strawberry_definition__")
    }


def convert_model_to_graphql_type(
    model_instance: Any, strawberry_types: dict[str, type] | None = None
) -> Any:
    """
    Converts a Django model instance to its corresponding Strawberry GraphQL type.
    """
    if not model_instance:
        return None

    if strawberry_types is None:
        strawberry_types = find_strawberry_types()

    gql_type = strawberry_types.get(model_instance.__class__.__name__)
    if gql_type is None:
        raise ValueError(
            f"No GraphQL type registered for model {model_instance.__class__.__name__}"
        )

    return gql_type.from_model(model_instance)


def is_list_type(field_type: type):
    return getattr(field_type, "__origin__", None) is list


def convert_streamfield_to_graphql(
    stream_value: StreamValue, field_type: type, strawberry_types: dict[str, type]
) -> list[Any] | Any | None:
    """
    Converts StreamField data to a list of corresponding Strawberry types,
    handling mixed types and specific page conversions.
    """
    converted_blocks = []

    def get_strawberry_type_and_hints(block):
        block_value = block.value
        # Determine the specific class for Wagtail Pages
        if isinstance(block_value, Page):
            block_value = block_value.specific

        strawberry_type = strawberry_types.get(
            type(block.block).__name__
        ) or strawberry_types.get(type(block_value).__name__)

        if strawberry_type:
            # Get type hints only for the relevant Strawberry type
            type_hints = get_type_hints(strawberry_type)
            return strawberry_type, type_hints
        return None, {}

    def get_value(block_value, name: str):
        if isinstance(block_value, StructValue):
            return block_value[name]
        return getattr(block_value, name, None)

    for block in stream_value:
        strawberry_type, type_hints = get_strawberry_type_and_hints(block)
        block_value = block.value

        if strawberry_type:
            block_data = {}
            for name in type_hints:
                block_data[name] = get_value(block_value, name)
            converted_blocks.append(strawberry_type(**block_data))

    if is_list_type(field_type):
        return converted_blocks
    return converted_blocks[0] if converted_blocks else None


def populate_from_model(strawberry_type: type, model_instance: Any) -> Any:
    """
    Populates a Strawberry type with data from a Django model instance,
    handling StreamField data and related objects.
    """
    strawberry_types = find_strawberry_types()
    type_hints = get_type_hints(strawberry_type)

    field_values = {}

    for field_name, field_type in type_hints.items():
        if isinstance(field_type, StrawberryAnnotation):
            continue

        if hasattr(model_instance, field_name):
            attribute = getattr(model_instance, field_name)
            if isinstance(attribute, StreamValue):
                value = convert_streamfield_to_graphql(
                    attribute, field_type, strawberry_types
                )

                field_values[field_name] = value
            elif is_list_type(field_type):
                related_manager = getattr(model_instance, field_name)
                related_objects = list(related_manager.all())
                field_values[field_name] = [
                    convert_model_to_graphql_type(obj, strawberry_types)
                    for obj in related_objects
                ]
            else:
                field_values[field_name] = attribute

    return strawberry_type(**field_values)
