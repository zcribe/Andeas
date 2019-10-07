from django.urls import path

from . import views

urlpatterns = [
    path('api/reservations/room/', views.RoomCreate.as_view()),
    path('api/reservations/table/', views.TableCreate.as_view()),
    path('api/reservations/reservation/', views.ReservationCreate.as_view()),

]
