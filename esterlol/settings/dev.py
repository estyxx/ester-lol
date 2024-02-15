from .base import *  # noqa

import contextlib

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-xnqm)ow7l!ndbc(24^k(t0zdyvlga7wqf(!u=e@*q@0a(!@m4d"

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ["*"]

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"


with contextlib.suppress(ImportError):
    from .local import *  # noqa
