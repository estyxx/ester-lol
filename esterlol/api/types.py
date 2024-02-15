import strawberry
import strawberry_django
from strawberry import auto

from esterlol.home import models


@strawberry_django.type(models.HomePage)
class HomePage:
    id: strawberry.ID
    title: auto
    search_description: auto
    slug: auto
    body: str
