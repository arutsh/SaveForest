# Generated by Django 4.2.5 on 2023-09-09 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tree', '0007_tree_last_viewed_by_tree_last_viewed_on_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='treerecord',
            name='set_alart',
            field=models.BooleanField(default=False),
        ),
    ]
