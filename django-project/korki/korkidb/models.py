from tkinter import CASCADE
from django.db import models
from django.forms import ImageField, IntegerField
from django.conf import settings

class waypoint(models.Model):
    locationx=models.FloatField()
    locationy=models.FloatField()
    name=models.CharField(max_length=255)
    description=models.CharField(max_length=1023)
    photo = models.CharField(max_length=255)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
class type(models.Model):
    name=models.CharField(max_length=255)
    description = models.CharField(max_length=1023)
    photo=models.CharField(max_length=255)
class event(models.Model):
    call_date=models.DateField()
    type_id = models.ForeignKey(type,on_delete=models.CASCADE)
    points = models.IntegerField()
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    locationx=models.FloatField()
    locationy=models.FloatField()
class plan(models.Model):
    date=models.DateField()
    remind=models.DateField()
    name=models.CharField(max_length=255)
    description=models.CharField(max_length=1023)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
class destination(models.Model):
    locationx=models.FloatField()
    locationy=models.FloatField()
    name=models.CharField(max_length=255)
    nr = models.IntegerField()
    time = models.TimeField()
    plan_id = models.ForeignKey(plan,on_delete=models.CASCADE)
