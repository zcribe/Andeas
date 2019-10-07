from django.db import models


class TimeStampedModel(models.Model):
    created = models.DateTimeField(auto_now_add=True, db_index=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Room(TimeStampedModel):
    name = models.TextField()
    layout = models.ImageField()

    def __str__(self):
        return self.name


class Table(TimeStampedModel):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    capacity = models.IntegerField()
    reserved = models.BooleanField()
    full = models.BooleanField()

    def __str__(self):
        return f"Nr:{self.id} - {self.room}"


class Reservation(TimeStampedModel):
    name = models.TextField()
    email = models.TextField()
    phone = models.IntegerField()
    people = models.IntegerField()
    table = models.ForeignKey(Table, on_delete=models.CASCADE)
    reminder = models.BooleanField()

    def __str__(self):
        return f"{self.table} - {self.people}"
