from typing import cast

import strawberry
from strawberry.types import Info
from wagtail.models import Page, Site

from esterlol.api.utils import convert_model_to_graphql_type
from esterlol.home.models import HomePage as HomePageModel
from esterlol.resume.models import ResumePage as ResumePageModel
from esterlol.site_settings.models import NavigationSettings as NavigationSettingsModel
from esterlol.site_settings.models import (
    SocialMediaSettings as SocialMediaSettingsModel,
)

from .types import HomePage, NavigationSettings, ResumePage, SocialMediaSettings
from .unions import Pages


@strawberry.type
class Query:
    @strawberry.field
    def pages(self, info: Info) -> list[Pages]:
        site = cast(Site, Site.find_for_request(info.context.request))
        pages = site.root_page.get_descendants(inclusive=True).live().specific()

        graphql_pages = [convert_model_to_graphql_type(page) for page in pages]

        return graphql_pages

    @strawberry.field
    def page(self, slug: str) -> Pages:
        page = Page.objects.get(slug=slug).specific

        return convert_model_to_graphql_type(page)

    @strawberry.field
    def home(
        self,
    ) -> HomePage:
        home = HomePageModel.objects.first()

        return convert_model_to_graphql_type(home)

    @strawberry.field
    def resume(self) -> ResumePage:
        resume = ResumePageModel.objects.first()

        return convert_model_to_graphql_type(resume)

    @strawberry.field
    def social_media_settings(self) -> SocialMediaSettings | None:
        settings = SocialMediaSettingsModel.objects.first()

        return convert_model_to_graphql_type(settings)

    @strawberry.field
    def navigation_settings(self) -> NavigationSettings | None:
        settings = NavigationSettingsModel.objects.first()

        return convert_model_to_graphql_type(settings)
