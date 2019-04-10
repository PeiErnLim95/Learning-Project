from django.urls import path
from . import views

urlpatterns = [
	path('', views.home, name='Blogger-Home'),
	path('about/', views.about, name='Blogger-About'),
]