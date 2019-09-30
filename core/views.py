from rest_framework import generics

from core.models import MenuItem, MenuCategory, NewsItem, NewsCategory, Business
from core.serializers import MenuItemSerializer, MenuCategorySerializer, NewsItemSerializer, NewsCategorySerializer, \
    BusinessSerializer


class MenuItemCreate(generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer


class MenuCategoryCreate(generics.ListCreateAPIView):
    queryset = MenuCategory.objects.all()
    serializer_class = MenuCategorySerializer


class NewsItemCreate(generics.ListCreateAPIView):
    queryset = NewsItem.objects.all()
    serializer_class = NewsItemSerializer


class NewsCategoryCreate(generics.ListCreateAPIView):
    queryset = NewsCategory.objects.all()
    serializer_class = NewsCategorySerializer


class BusinessCreate(generics.ListCreateAPIView):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer
