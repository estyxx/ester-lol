from .base import *  # noqa

from .base import env
import contextlib


SECRET_KEY = env("SECRET_KEY")

ALLOWED_HOSTS = ["ester-lol.fly.dev"]
CSRF_TRUSTED_ORIGINS = [
    "https://ester-lol.fly.dev",
]

WAGTAILADMIN_BASE_URL = "https://esterlol.fly.dev"

with contextlib.suppress(ImportError):
    from .local import *  # noqa
