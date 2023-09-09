from django.contrib import admin
from .models import TreeType

# Register your models here.

@admin.register(TreeType)
class TreeTypeAdmin(admin.ModelAdmin):
    list_display = ("created_on", "name", "description", "lifespan", "oxygen", "modified_on")
    list_filter = ("created_on", "name", "description", "lifespan", "oxygen", "modified_on")
    search_fields = ["name"]
