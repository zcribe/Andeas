from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'frontend/index.html'


class ContactView(TemplateView):
    template_name = 'frontend/contact.html'


class EventsView(TemplateView):
    template_name = 'frontend/events.html'


class ReserveView(TemplateView):
    template_name = 'frontend/reserve.html'
