from django.db import models
from taggit.managers import TaggableManager
from wagtail.images.models import AbstractImage, AbstractRendition
from wagtail.images.models import Image as WagtailImage
from wagtail.search import index


class CustomAbstractImage(AbstractImage):
    tags = TaggableManager(related_name="tags")

    uploaded_by_user = models.ForeignKey(
        "users.User",
        null=True,
        blank=True,
        editable=False,
        related_name="images",
        on_delete=models.SET_NULL,
    )

    class Meta:
        abstract = True


class Image(CustomAbstractImage):
    alt_text = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        help_text=(
            "Provide a text alternative for this image for visually "
            "impaired users."
            "<br />For advice and best practice, visit "
            "<a href='https://moz.com/learn/seo/alt-text' target='_blank' "
            "rel='noreferrer noopener'>"
            "https://moz.com/learn/seo/alt-text</a>"
        ),
    )

    admin_form_fields = WagtailImage.admin_form_fields + ("alt_text",)
    search_fields = [
        index.SearchField("alt_text"),
    ]


class ImageRendition(AbstractRendition):
    image = models.ForeignKey(
        Image, on_delete=models.CASCADE, related_name="renditions"
    )

    class Meta:
        unique_together = (("image", "filter_spec", "focal_point_key"),)
