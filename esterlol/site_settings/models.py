from django.db import models
from django.utils.functional import cached_property
from django.utils.translation import gettext_lazy as _
from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel
from wagtail import blocks
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.contrib.settings.models import (
    BaseGenericSetting,
    BaseSiteSetting,
    register_setting,
)
from wagtail.fields import StreamField
from wagtail.models import Orderable


@register_setting
class NavigationSettings(BaseSiteSetting):
    primary_navigation = StreamField(
        [("page", blocks.PageChooserBlock())],
        blank=True,
        help_text=_("Main site navigation"),
        use_json_field=True,
        max_num=5,
    )

    panels = [
        FieldPanel("primary_navigation"),
    ]


@register_setting
class SocialMediaSettings(BaseGenericSetting, ClusterableModel):
    email = models.CharField(max_length=255, blank=True, verbose_name="Email")
    website = models.CharField(max_length=255, blank=True, verbose_name="Website")

    class Meta:
        verbose_name = "Social Media Settings"

    panels = [
        FieldPanel("email"),
        FieldPanel("website"),
        InlinePanel(
            "socials",
            label="Social Account",
            heading="Socials",
        ),
    ]


SOCIALS = [
    ("facebook", "Facebook"),
    ("instagram", "Instagram"),
    ("github", "GitHub"),
    ("linkedin", "LinkedIn"),
    ("mastodon", "Mastodon"),
    ("threads", "Threads"),
    ("twitter", "Twitter"),
]


class SocialAccount(Orderable):
    name = models.CharField(max_length=255, choices=SOCIALS)
    username = models.CharField(max_length=255)
    settings = ParentalKey(
        "SocialMediaSettings",
        related_name="socials",
    )

    def __str__(self) -> str:
        return f"{dict(SOCIALS)[self.name]} ({self.username})"

    @cached_property
    def url(self) -> str:
        urls = {
            "facebook": "https://facebook.com/",
            "github": "https://github.com/",
            "instagram": "https://instagram.com/",
            "linkedin": "https://linkedin.com/in/",
            "mastodon": "",
            "threads": "https://www.threads.net/",
            "twitter": "https://twitter.com/",
        }

        return f"{urls.get(self.name, '')}{self.username}"

    def save(self, *args, **kwargs) -> None:
        """Automatically clean usernames before saving."""
        social_fields = [
            "facebook",
            "github",
            "instagram",
            "linkedin",
            "threads",
            "twitter",
        ]

        if self.name in social_fields:
            self.username = self.username.lstrip("@")

        super().save(*args, **kwargs)

    panels = [
        FieldPanel("name"),
        FieldPanel("username"),
    ]

    class Meta:
        unique_together = ("name", "username")
        ordering = ["name"]
