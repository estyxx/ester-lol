from .base import *  # noqa

import contextlib

DEBUG = False
ALLOWED_HOSTS = [
    "ester-lol.fly.dev",
]
WAGTAILADMIN_BASE_URL = "https://esterlol.fly.dev"

with contextlib.suppress(ImportError):
    from .local import *  # noqa
