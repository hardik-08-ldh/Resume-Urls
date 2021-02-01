from django.shortcuts import render
from .models import Link
from django.views.generic import ListView
# Create your views here.
class UrlView(ListView):
    model=Link
    template_name='base.html'
    ordering=['name']