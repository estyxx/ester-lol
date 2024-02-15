from .base import *  # noqa

import contextlib

DEBUG = False


with contextlib.suppress(ImportError):
    from .local import *  # noqa
