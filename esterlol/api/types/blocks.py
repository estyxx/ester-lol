import strawberry
from strawberry_django.fields.types import field_type_map
from wagtail.fields import RichTextField


@strawberry.type
class CTABlock:
    text: str
    url: str


field_type_map.update(
    {
        RichTextField: str,
    }
)
