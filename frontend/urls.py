from django.urls import path

from . import views

urlpatterns = [
    path('', views.IndexView.as_view()),
    path('contact-us', views.ContactView.as_view()),
    path('events-and-catering', views.EventsView.as_view()),
    path('reserve-a-table', views.ReserveView.as_view()),
]
