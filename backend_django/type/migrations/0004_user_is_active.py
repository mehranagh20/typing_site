# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-03-19 09:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('type', '0003_auto_20170319_0947'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
