import strawberry
from strawberry_django.optimizer import DjangoOptimizerExtension

from .query import Query

schema = strawberry.Schema(
    query=Query,
    extensions=[
        DjangoOptimizerExtension,
    ],
)
