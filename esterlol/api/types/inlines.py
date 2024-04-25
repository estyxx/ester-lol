import strawberry_django
from strawberry import auto

from esterlol.resume.models import PageActivity as PageActivityModel
from esterlol.resume.models import PageEducation as PageEducationModel
from esterlol.resume.models import PageExperience as PageExperienceModel
from esterlol.resume.models import (
    PageOpenSourceContribution as PageOpenSourceContributionModel,
)
from esterlol.resume.models import Technology as TechnologyModel

from ._base import Base
from .snippets import Activity, Education, Experience


@strawberry_django.type(
    model=TechnologyModel,
)
class Technology(Base):
    technology: auto


@strawberry_django.type(
    model=PageExperienceModel,
)
class PageExperience(Base):
    experience: Experience


@strawberry_django.type(
    model=PageOpenSourceContributionModel,
)
class PageOpenSourceContribution(Base):
    open_source: Experience


@strawberry_django.type(
    model=PageActivityModel,
)
class PageActivity(Base):
    activity: Activity


@strawberry_django.type(model=PageEducationModel)
class PageEducation(Base):
    education: Education
