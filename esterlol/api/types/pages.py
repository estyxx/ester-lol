from typing import Annotated

import strawberry
import strawberry_django
from strawberry import auto
from wagtail.models import Page as PageModel

from esterlol.home.models import HomePage as HomePageModel
from esterlol.resume.models import AboutMePage as AboutMePageModel
from esterlol.resume.models import ResumePage as ResumePageModel

from ._base import Base
from .blocks import CTABlock
from .image import Image
from .inlines import (
    PageActivity,
    PageEducation,
    PageExperience,
    PageOpenSourceContribution,
    Technology,
)


@strawberry_django.type(
    model=PageModel,
)
class Page(Base):
    id: auto
    title: auto
    slug: auto
    seo_title: auto
    search_description: auto


@strawberry_django.type(
    model=HomePageModel,
)
class HomePage(Page):
    tagline: auto
    introduction: auto
    cta: Annotated[CTABlock, strawberry.union("Block")]
    image: Image


@strawberry_django.type(
    model=ResumePageModel,
)
class ResumePage(Page):
    subtitle: auto
    profile_photo: Image
    introduction: auto
    technologies: list[Technology]
    experiences: list[PageExperience]
    open_source_contributions: list[PageOpenSourceContribution]
    activities: list[PageActivity]
    educations: list[PageEducation]


@strawberry_django.type(
    model=AboutMePageModel,
)
class AboutMePage(Page):
    profile_photo: Image
    introduction: auto
    technologies: list[Technology]
    experiences: list[PageExperience]
    open_source_contributions: list[PageOpenSourceContribution]
    activities: list[PageActivity]
    educations: list[PageEducation]
