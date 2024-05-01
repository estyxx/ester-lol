from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import RedirectView
from strawberry.django.views import GraphQLView
from wagtail.admin import urls as wagtailadmin_urls
from wagtail.documents import urls as wagtaildocs_urls

from esterlol.api.schema import schema
from esterlol.search import views as search_views

urlpatterns = [
    path("", RedirectView.as_view(url="/graphql/", permanent=False)),
    path("django-admin/", admin.site.urls),
    path("admin/", include(wagtailadmin_urls)),
    path("documents/", include(wagtaildocs_urls)),
    path("search/", search_views.search, name="search"),
    path("graphql/", GraphQLView.as_view(schema=schema)),
]


if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    # Serve static and media files from development server
    urlpatterns += staticfiles_urlpatterns()

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
