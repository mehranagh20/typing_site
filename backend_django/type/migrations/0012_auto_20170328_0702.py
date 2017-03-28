# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-03-28 07:02
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('type', '0011_involvement_started_conpetition'),
    ]

    operations = [
        migrations.AddField(
            model_name='competition',
            name='competition_close_time',
            field=models.DateTimeField(default=datetime.datetime(2017, 3, 28, 7, 2, 4, 317093, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='competition',
            name='registration_close_time',
            field=models.DateTimeField(default=datetime.datetime(2017, 3, 28, 7, 2, 16, 274714, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
