from .base import *  # noqa

import environ

import contextlib

env = environ.Env()

DEBUG = False
SECRET_KEY = env("SECRET_KEY")

ALLOWED_HOSTS = [
    "ester-lol.fly.dev",
]

WAGTAILADMIN_BASE_URL = "https://esterlol.fly.dev"

with contextlib.suppress(ImportError):
    from .local import *  # noqa
