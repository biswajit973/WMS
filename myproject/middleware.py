from django.shortcuts import render
from django.urls import Resolver404, resolve


class StrictURLMiddleware:
    """
    Enforces strict URL access for this marketing site:
    - Unknown paths return a clean custom 404 page.
    - Manual query-string tampering on public pages is blocked.
    """

    ALLOWED_QUERY_PREFIXES = ("/admin/",)

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        path = request.path_info

        # Block manual query-string tampering on public routes.
        if request.GET and not path.startswith(self.ALLOWED_QUERY_PREFIXES):
            return render(
                request,
                "error-message.html",
                {
                    "error_code": 400,
                    "error_title": "Invalid URL",
                    "error_message": "This page does not accept modified URL parameters. Please use the website menu links.",
                },
                status=400,
            )

        # Return a clean custom error instead of default debug 404 output.
        try:
            resolve(path)
        except Resolver404:
            return render(
                request,
                "error-message.html",
                {
                    "error_code": 404,
                    "error_title": "Page Not Found",
                    "error_message": "The page you requested is not available. Please navigate using the menu.",
                },
                status=404,
            )

        return self.get_response(request)
