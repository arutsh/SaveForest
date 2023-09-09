from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class MyUserAdmin(UserAdmin):
    model = User
    list_display = ['email', 'first_name', 'last_name', 'get_groups', 'is_active']
    def get_groups(self, groups):
        return "\n".join([group.name for group in groups.groups.all()])

admin.site.register(User, MyUserAdmin)


