from rest_framework import serializers

from .models import MenuItem, MenuCategory, NewsItem, NewsCategory, Business


class NewsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsCategory
        fields = '__all__'


class NewsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsItem
        fields = '__all__'


class MenuCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuCategory
        fields = '__all__'


class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = '__all__'


class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = '__all__'
