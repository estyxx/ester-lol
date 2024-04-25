# Generated by Django 5.0.2 on 2024-02-29 13:32

import django.db.models.deletion
import wagtail.blocks
import wagtail.fields
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0002_create_homepage"),
        ("wagtailimages", "0025_alter_image_file_alter_rendition_file"),
    ]

    operations = [
        migrations.AddField(
            model_name="homepage",
            name="cta",
            field=wagtail.fields.StreamField(
                [
                    (
                        "cta",
                        wagtail.blocks.StructBlock(
                            [
                                (
                                    "text",
                                    wagtail.blocks.CharBlock(
                                        help_text="Text to display on the button",
                                        max_length=50,
                                        required=True,
                                    ),
                                ),
                                (
                                    "page",
                                    wagtail.blocks.PageChooserBlock(
                                        help_text="Select an internal page to link to",
                                        required=False,
                                    ),
                                ),
                                (
                                    "url",
                                    wagtail.blocks.URLBlock(
                                        help_text="Or enter an external URL",
                                        required=False,
                                    ),
                                ),
                            ]
                        ),
                    )
                ],
                blank=True,
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="homepage",
            name="image",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="wagtailimages.image",
            ),
        ),
        migrations.AddField(
            model_name="homepage",
            name="introduction",
            field=wagtail.fields.RichTextField(blank=True),
        ),
        migrations.AddField(
            model_name="homepage",
            name="tagline",
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
