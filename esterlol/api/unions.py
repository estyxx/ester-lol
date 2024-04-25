from typing import Annotated

import strawberry

from .types import AboutMePage, HomePage, ResumePage
from .types import Page as PageType

Pages = Annotated[
    PageType | HomePage | ResumePage | AboutMePage, strawberry.union("Pages")
]
