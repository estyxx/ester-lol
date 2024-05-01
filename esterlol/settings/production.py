from .base import *  # noqa

from .base import env, BASE_DIR
import contextlib


SECRET_KEY = env("SECRET_KEY")

CSRF_TRUSTED_ORIGINS = [
    "https://ester-lol.fly.dev",
]

WAGTAILADMIN_BASE_URL = "https://esterlol.fly.dev"

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/
STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "static"
STORAGES = {
    "default": {
        "BACKEND": "storages.backends.s3boto3.S3Boto3Storage",
    },
    "staticfiles": {
        "BACKEND": "storages.backends.s3boto3.S3Boto3Storage",
    },
}


# AWS Settings


AWS_ACCESS_KEY_ID = env("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = env("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = env("AWS_STORAGE_BUCKET_NAME")
AWS_S3_CUSTOM_DOMAIN = f"{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com"
AWS_S3_REGION_NAME = env("AWS_S3_REGION_NAME", default="eu-west-2")
AWS_QUERYSTRING_AUTH = False  # Optional: prevents generation of signed URLs
AWS_DEFAULT_ACL = "public-read"  # Optional: makes uploaded files readable to the public
AWS_S3_OBJECT_PARAMETERS = {
    "CacheControl": "max-age=86400",
}
AWS_LOCATION = "media"


MEDIA_URL = f"https://{AWS_S3_CUSTOM_DOMAIN}/{AWS_LOCATION}/"


with contextlib.suppress(ImportError):
    from .local import *  # noqa
