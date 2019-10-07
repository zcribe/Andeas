from django.urls import path

from . import views

urlpatterns = [
    path('api/reservations/room/', views.RoomView.as_view()),
    path('api/reservations/table/', views.TableView.as_view()),
    path('api/reservations/reservation/', views.ReservationView.as_view()),

]
