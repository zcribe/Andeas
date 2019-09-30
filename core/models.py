from django.db import models


# Abstract models
class TimeStampedModel(models.Model):
    created = models.DateTimeField(auto_now_add=True, db_index=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class ImageFieldModel(TimeStampedModel):
    title = models.CharField(max_length=100)
    alt = models.CharField(max_length=100)
    image = models.ImageField()

    def __str__(self):
        return self.title

    class Meta:
        abstract = True


class ContentItem(TimeStampedModel):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField(max_length=800)

    def __str__(self):
        return self.title

    class Meta:
        abstract = True


class CategoryItem(TimeStampedModel):
    title = models.CharField(max_length=200)
    slug = models.SlugField()

    class Meta:
        abstract = True


# News models
class NewsCategory(CategoryItem):
    parent = models.ForeignKey('self', blank=True, null=True, related_name='children', on_delete=models.PROTECT)

    def __str__(self):
        return self.title


class NewsItem(ContentItem):
    category = models.ForeignKey('NewsCategory', null=True, blank=True, on_delete=models.PROTECT)
    draft = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class NewsItemImage(ImageFieldModel):
    parent = models.ForeignKey('NewsItem', on_delete=models.CASCADE)


# Menu Item models
class MenuCategory(CategoryItem):
    parent = models.ForeignKey('self', blank=True, null=True, related_name='children', on_delete=models.PROTECT)

    def __str__(self):
        return self.title


class MenuItem(ContentItem):
    price = models.DecimalField(max_length=6, decimal_places=2, max_digits=6)
    category = models.ForeignKey('MenuCategory', null=True, blank=True, on_delete=models.CASCADE)
    draft = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class MenuItemImage(ImageFieldModel):
    parent = models.ForeignKey(to=MenuItem, on_delete=models.CASCADE)


# Business
class Business(TimeStampedModel):
    title = models.CharField(max_length=300)
    address = models.CharField(max_length=300)

    def __str__(self):
        return self.title


class SocialLink(TimeStampedModel):
    title = models.CharField(max_length=200)
    url = models.URLField(max_length=600)
    parent = models.ForeignKey('Business', on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class ParkingLocation(TimeStampedModel):
    title = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    price = models.DecimalField(max_length=6, decimal_places=2, max_digits=6)
    parent = models.ForeignKey('Business', on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class HoursField(TimeStampedModel):
    entry_line = models.CharField(max_length=200)
    parent = models.ForeignKey('Business', on_delete=models.CASCADE)
