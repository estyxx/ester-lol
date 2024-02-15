import strawberry
import strawberry_django
from strawberry.types import Info
from strawberry_django.optimizer import DjangoOptimizerExtension

from .types import HomePage


@strawberry.type
class Query:
    @strawberry.field
    def user(self, info: Info) -> str:
        return str(info.context.request.user)

    pages: list[HomePage] = strawberry_django.field()


schema = strawberry.Schema(
    query=Query,
    extensions=[
        DjangoOptimizerExtension,
    ],
)
