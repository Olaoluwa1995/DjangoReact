from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from articles.api.views import ArticleDetailView, ArticleListView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
    path('api/articles', ArticleListView.as_view()),
    path('api/articles/<int:pk>', ArticleDetailView.as_view()),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
