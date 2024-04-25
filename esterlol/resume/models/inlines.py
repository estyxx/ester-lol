from django.db import models
from modelcluster.fields import ParentalKey
from wagtail.admin.panels import FieldPanel
from wagtail.models import Orderable

TECHNOLOGIES_CHOICES = (
    ("python", "Python"),
    ("django", "Django"),
    ("graphql", "GraphQL"),
    ("nextjs", "Next.js"),
    ("typescript", "Typescript"),
    ("react", "React"),
    ("javascript", "JavaScript"),
    ("css3", "CSS3"),
    ("html5", "HTML5"),
    ("nodejs", "Node.js"),
    ("docker", "Docker"),
    ("aws", "AWS"),
    ("git", "Git"),
    ("postgresql", "PostgreSQL"),
    ("mysql", "MySQL"),
    ("selenium", "Selenium"),
)


class Technology(Orderable):
    parent = ParentalKey("wagtailcore.Page", related_name="technologies")
    technology = models.CharField(max_length=255, choices=TECHNOLOGIES_CHOICES)

    panels = [
        FieldPanel("technology"),
    ]

    def __str__(self) -> str:
        return self.technology


class PageExperience(Orderable, models.Model):
    page = ParentalKey(
        "wagtailcore.Page", on_delete=models.CASCADE, related_name="experiences"
    )
    experience = models.ForeignKey(
        "resume.Experience", on_delete=models.CASCADE, related_name="+"
    )

    class Meta(Orderable.Meta):
        verbose_name = "experience"
        verbose_name_plural = "experiences"

    panels = [
        FieldPanel("experience"),
    ]

    def __str__(self) -> str:
        return self.page.title + " -> " + self.experience.company


class PageOpenSourceContribution(Orderable, models.Model):
    page = ParentalKey(
        "wagtailcore.Page",
        on_delete=models.CASCADE,
        related_name="open_source_contributions",
    )
    open_source = models.ForeignKey(
        "resume.Experience", on_delete=models.CASCADE, related_name="+"
    )

    class Meta(Orderable.Meta):
        verbose_name = "Open source"
        verbose_name_plural = "Open source contributions"

    panels = [
        FieldPanel("open_source"),
    ]

    def __str__(self) -> str:
        return self.page.title + " -> " + self.open_source.company


class PageActivity(Orderable, models.Model):
    page = ParentalKey(
        "wagtailcore.Page", on_delete=models.CASCADE, related_name="activities"
    )
    activity = models.ForeignKey(
        "resume.Activity", on_delete=models.CASCADE, related_name="+"
    )

    class Meta(Orderable.Meta):
        verbose_name = "activity"
        verbose_name_plural = "activities"

    panels = [
        FieldPanel("activity"),
    ]

    def __str__(self) -> str:
        return self.page.title + " -> " + self.activity.title


class PageEducation(Orderable, models.Model):
    page = ParentalKey(
        "wagtailcore.Page", on_delete=models.CASCADE, related_name="educations"
    )
    education = models.ForeignKey(
        "resume.Education", on_delete=models.CASCADE, related_name="+"
    )

    class Meta(Orderable.Meta):
        verbose_name = "education"
        verbose_name_plural = "educations"

    panels = [
        FieldPanel("education"),
    ]

    def __str__(self) -> str:
        return self.page.title + " -> " + self.education.institution_name
