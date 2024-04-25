from typing import Any, Self

from esterlol.api.utils import populate_from_model


class Base:
    @classmethod
    def from_model(cls, obj: Any) -> Self:
        return populate_from_model(cls, obj)
