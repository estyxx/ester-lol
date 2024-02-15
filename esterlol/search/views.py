from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.http import HttpRequest, HttpResponse
from django.template.response import TemplateResponse
from wagtail.models import Page

# Assuming the import for Query is uncommented when used
# from wagtail.contrib.search_promotions.models import Query


def search(request: HttpRequest) -> HttpResponse:
    search_query: str | None = request.GET.get("query")
    page: str = request.GET.get("page", "1")

    # Search
    if search_query:
        search_results = Page.objects.live().search(search_query)

        # Logging this query for "Promoted search results", uncomment as necessary
        # query = Query.get(search_query)
        # query.add_hit()

    else:
        search_results = Page.objects.none()

    # Pagination
    paginator = Paginator(search_results, 10)
    try:
        search_results = paginator.page(int(page))
    except PageNotAnInteger:
        search_results = paginator.page(1)
    except EmptyPage:
        search_results = paginator.page(paginator.num_pages)

    return TemplateResponse(
        request,
        "search/search.html",
        {
            "search_query": search_query,
            "search_results": search_results,
        },
    )
