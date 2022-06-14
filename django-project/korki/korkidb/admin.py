from django.contrib import admin
from korkidb.models import *
# Register your models here.
admin.site.register(waypoint)
admin.site.register(plan)
admin.site.register(destination)
admin.site.register(event)
admin.site.register(type)