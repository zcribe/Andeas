from django.urls import path

from . import views

urlpatterns = [
    path('api/core/menu-item/', views.MenuItemCreate.as_view()),
    path('api/core/menu-category/', views.MenuCategoryCreate.as_view()),
    path('api/core/news-item/', views.NewsItemCreate.as_view()),
    path('api/core/news-category/', views.NewsCategoryCreate.as_view()),
    path('api/core/', views.BusinessCreate.as_view()),
]
