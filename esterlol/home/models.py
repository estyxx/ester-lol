from django.db import models
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField, StreamField
from wagtail.models import Page

from esterlol.home.blocks import CTABlock


class HomePage(Page):
    tagline = models.CharField(max_length=250, blank=True, null=True)
    introduction = RichTextField(blank=True)
    image = models.ForeignKey(
        "images.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )
    cta = StreamField(
        [
            ("cta", CTABlock()),
        ],
        null=True,
        blank=True,
        min_num=1,
        max_num=1,
    )

    subpage_types = [
        "resume.ResumePage",
        "resume.AboutMePage",
    ]
    max_count = 1

    content_panels = Page.content_panels + [
        FieldPanel("tagline"),
        FieldPanel("introduction"),
        FieldPanel("image"),
        FieldPanel("cta"),
    ]
