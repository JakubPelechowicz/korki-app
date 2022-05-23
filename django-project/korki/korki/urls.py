# django_project/urls.py
from django.contrib import admin
from django.urls import path, include
from korkidb import views


urlpatterns = [
    path('',views.home,name='home'),
    path('admin/', admin.site.urls),
    path('korkidb/', include('django.contrib.auth.urls')),
    path('korkidb/', include('korkidb.urls')), # new
]