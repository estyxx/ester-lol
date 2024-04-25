import datetime

import strawberry
import strawberry_django
from django.conf import settings
from taggit.models import Tag as TagModel

from esterlol.api.types._base import Base
from esterlol.images.models import Image as ImageModel
from esterlol.images.models import ImageRendition as ImageRenditionModel


@strawberry_django.type(TagModel)
class Tag(Base):
    id: strawberry.ID
    name: str


@strawberry_django.type(model=ImageRenditionModel)
class ImageRendition(Base):
    id: strawberry.ID
    file: str
    image: "Image"
    filter_spec: str
    width: int
    height: int
    focal_point_key: str
    focal_point: str | None
    alt: str
    background_position_style: str

    @strawberry_django.field
    def url(self, root: ImageModel) -> str:
        url = root.file.url
        if url[0] == "/":
            return settings.WAGTAILADMIN_BASE_URL + url
        return url


@strawberry_django.type(ImageModel)
class Image:
    id: strawberry.ID
    title: str
    file: str
    height: int
    width: int
    created_at: datetime.datetime
    alt_text: str
    focal_point_x: int | None
    focal_point_y: int | None
    focal_point_width: int | None
    focal_point_height: int | None
    file_size: int | None
    file_hash: str

    @strawberry_django.field
    def url(self, root: ImageModel) -> str:
        url = root.file.url
        if url[0] == "/":
            return settings.WAGTAILADMIN_BASE_URL + url
        return url

    @strawberry_django.field
    def aspect_ratio(self, root: ImageModel) -> float:
        return root.width / root.height

    @strawberry_django.field
    def sizes(self, root: ImageModel) -> str:
        return f"(max-width: {root.width}px) 100vw, {root.width}px"

    @strawberry_django.field
    def tags(self, root: ImageModel) -> list[Tag]:
        return [Tag.from_model(tag) for tag in root.tags.all()]

    @strawberry_django.field
    def rendition(self, root: ImageModel, specs: str) -> "ImageRendition":
        return ImageRendition.from_model(root.get_rendition(specs))
