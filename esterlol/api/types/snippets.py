import strawberry_django
from strawberry import auto

from esterlol.resume.models import Activity as ActivityModel
from esterlol.resume.models import Education as EducationModel
from esterlol.resume.models import Experience as ExperienceModel


@strawberry_django.type(model=ExperienceModel)
class Experience:
    id: auto
    job_title: auto
    company_name: auto
    company_website: auto
    timeline: auto
    long_description: auto
    short_description: auto


@strawberry_django.type(model=ActivityModel)
class Activity:
    id: auto
    title: auto
    date_range: auto
    link: auto
    long_description: auto
    short_description: auto


@strawberry_django.type(model=EducationModel)
class Education:
    id: auto
    institution_name: auto
    degree: auto
    date_range: auto
