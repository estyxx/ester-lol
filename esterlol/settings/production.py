from .base import *  # noqa

import contextlib

DEBUG = False

WAGTAILADMIN_BASE_URL = "https://esterlol.fly.dev"

with contextlib.suppress(ImportError):
    from .local import *  # noqa
