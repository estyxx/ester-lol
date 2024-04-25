from django.db import models
from modelcluster.models import ClusterableModel
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.fields import RichTextField
from wagtail.models import Page


class ResumePage(Page, ClusterableModel):
    subtitle = models.CharField(max_length=255, blank=True)
    profile_photo = models.ForeignKey(
        "images.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )
    introduction = RichTextField(blank=True)

    parent_page_types = [
        "home.HomePage",
    ]
    max_count = 1

    content_panels = Page.content_panels + [
        FieldPanel("subtitle"),
        FieldPanel("profile_photo"),
        FieldPanel("introduction"),
        InlinePanel("technologies", label="Technologies"),
        InlinePanel("experiences", label="Experiences"),
        InlinePanel("activities", label="Activities"),
        InlinePanel("educations", label="Education"),
        InlinePanel("open_source_contributions", label="Open source contributions"),
    ]


class AboutMePage(Page, ClusterableModel):
    profile_photo = models.ForeignKey(
        "images.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )
    introduction = RichTextField(blank=True)

    parent_page_types = [
        "home.HomePage",
    ]
    max_count = 1

    content_panels = Page.content_panels + [
        FieldPanel("profile_photo"),
        FieldPanel("introduction"),
        InlinePanel("technologies"),
        InlinePanel("experiences", label="Experiences"),
        InlinePanel("activities", label="Activities"),
        InlinePanel("educations", label="Education"),
        InlinePanel("open_source_contributions", label="Open source contributions"),
    ]
