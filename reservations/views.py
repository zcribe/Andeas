from rest_framework import generics

from .models import Room, Table, Reservation
from .serializers import RoomSerializer, TableSerializer, ReservationSerializer


class RoomCreate(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class TableCreate(generics.ListCreateAPIView):
    queryset = Table.objects.all()
    serializer_class = TableSerializer


class ReservationCreate(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer


