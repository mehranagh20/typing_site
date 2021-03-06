# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-03-28 14:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('type', '0013_auto_20170328_0946'),
    ]

    operations = [
        migrations.AddField(
            model_name='involvement',
            name='correct_char_number',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='involvement',
            name='time_passed',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='involvement',
            name='total_keystrokes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='involvement',
            name='wrong_char_number',
            field=models.IntegerField(default=0),
        ),
    ]
