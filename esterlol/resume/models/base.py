from django.db import models
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField
from wagtail.snippets.models import register_snippet


@register_snippet
class Experience(models.Model):
    job_title = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    company_website = models.URLField()
    timeline = models.CharField(max_length=255)
    short_description = RichTextField()
    long_description = RichTextField(blank=True)

    panels = [
        FieldPanel("job_title"),
        FieldPanel("company_name"),
        FieldPanel("company_website"),
        FieldPanel("timeline"),
        FieldPanel("short_description"),
        FieldPanel("long_description"),
    ]

    def __str__(self) -> str:
        return self.company_name


@register_snippet
class Activity(models.Model):
    title = models.CharField(max_length=255)
    date_range = models.CharField(max_length=255, blank=True)
    short_description = RichTextField()
    long_description = RichTextField(blank=True)
    link = models.URLField(blank=True)

    panels = [
        FieldPanel("title"),
        FieldPanel("date_range"),
        FieldPanel("short_description"),
        FieldPanel("long_description"),
        FieldPanel("link"),
    ]

    def __str__(self) -> str:
        return self.title


@register_snippet
class Education(models.Model):
    institution_name = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    date_range = models.CharField(max_length=255, blank=True)
    description = RichTextField()

    panels = [
        FieldPanel("institution_name"),
        FieldPanel("degree"),
        FieldPanel("date_range"),
        FieldPanel("description"),
    ]

    def __str__(self) -> str:
        return self.institution_name
