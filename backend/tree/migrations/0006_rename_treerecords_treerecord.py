# Generated by Django 4.2.5 on 2023-09-09 11:55

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tree', '0005_tree_created_by_tree_modified_by_treetype_created_by_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='TreeRecords',
            new_name='TreeRecord',
        ),
    ]
