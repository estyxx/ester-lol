from typing import Self

import strawberry_django
from strawberry import auto

from esterlol.api.utils import populate_from_model
from esterlol.site_settings.models import NavigationSettings as NavigationSettingsModel
from esterlol.site_settings.models import SocialAccount as SocialAccountModel
from esterlol.site_settings.models import (
    SocialMediaSettings as SocialMediaSettingsModel,
)

from ..unions import Pages
from ._base import Base


@strawberry_django.type(model=NavigationSettingsModel)
class NavigationSettings(Base):
    primary_navigation: list[Pages]


@strawberry_django.type(
    model=SocialAccountModel,
)
class SocialAccount:
    name: str
    username: str
    url: str

    @classmethod
    def from_model(cls, obj: SocialAccountModel) -> Self:
        return populate_from_model(cls, obj)


@strawberry_django.type(model=SocialMediaSettingsModel)
class SocialMediaSettings(Base):
    email: auto
    website: auto
    socials: list[SocialAccount]
