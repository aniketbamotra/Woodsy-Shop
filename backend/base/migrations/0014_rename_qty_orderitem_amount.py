# Generated by Django 4.0.3 on 2022-03-14 16:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_orderitem_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderitem',
            old_name='qty',
            new_name='amount',
        ),
    ]