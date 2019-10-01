import json
import random

from django.core.serializers.json import DjangoJSONEncoder
from django.template.defaultfilters import slugify
from mimesis import Food, Datetime, Business, Text, Code, Numbers


def generate_menu_items(amount):
    date = Datetime()
    food = Food()
    business = Business()
    text = Text()
    code = Code()
    num = Numbers()

    model = "core.menuitem"
    items = []
    count = 1

    for _ in range(amount):
        fields = {"created": date.datetime(), "modified": date.datetime(), "title": food.dish()}
        fields["slug"] = f'{fields["title"].replace(" ", "-")}-{code.issn()}'
        fields["content"] = text.quote()
        fields["price"] = num.between(1, 100)
        fields["category"] = None
        fields["draft"] = False

        single = {
            "model": model,
            "pk": count,
            "fields": fields
        }

        count += 1
        items.append(single)

    with open("menu.json", "w") as f:
        json.dump(items, f, cls=DjangoJSONEncoder)


def generate_news_items(amount):
    date = Datetime()
    text = Text()
    num = Numbers()
    code = Code()

    model = "core.newsitem"
    items = []
    count = 1

    for _ in range(amount):
        fields = {}
        fields["created"] = date.datetime()
        fields["modified"] = date.datetime()
        fields["title"] = text.title()
        fields["slug"] = slugify(f"{fields['title']}-{code.ean()}")
        fields["content"] = text.text(6)
        fields["draft"] = False
        fields["category"] = random.randint(1, 3)

        single = {
            "model": model,
            "pk": count,
            "fields": fields
        }

        count += 1
        items.append(single)

    with open("news.json", "w") as f:
        json.dump(items, f, cls=DjangoJSONEncoder)


generate_news_items(100)
