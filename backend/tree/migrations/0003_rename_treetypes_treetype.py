# Generated by Django 4.2.5 on 2023-09-09 10:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tree', '0002_treetypes_delete_tree'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='TreeTypes',
            new_name='TreeType',
        ),
    ]