from typing import Any

from wagtail import blocks


class CTABlock(blocks.StructBlock):
    text = blocks.CharBlock(
        required=True, max_length=50, help_text="Text to display on the button"
    )
    page = blocks.PageChooserBlock(
        required=False, help_text="Select an internal page to link to"
    )
    url = blocks.URLBlock(required=False, help_text="Or enter an external URL")

    class Meta:
        icon = "placeholder"
        label = "Call To Action"

    def clean(self, value) -> Any:
        errors = {}
        if value.get("page") and value.get("url"):
            errors["page"] = errors["url"] = (
                "Please choose either an internal page or an external URL, not both."
            )

        if not value.get("page") and not value.get("url"):
            errors["page"] = errors["url"] = (
                "Please choose either an internal page or an external URL."
            )

        if errors:
            raise blocks.StructBlockValidationError(errors)

        return super().clean(value)
