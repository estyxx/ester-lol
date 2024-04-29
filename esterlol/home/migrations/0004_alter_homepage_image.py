# Generated by Django 5.0.2 on 2024-03-14 10:07

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0003_homepage_cta_homepage_image_homepage_introduction_and_more"),
        ("images", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="homepage",
            name="image",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="images.image",
            ),
        ),
    ]