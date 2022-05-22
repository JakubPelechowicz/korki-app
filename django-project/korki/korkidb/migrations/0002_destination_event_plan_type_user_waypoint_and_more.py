# Generated by Django 4.0.4 on 2022-05-18 15:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('korkidb', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='destination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('locationx', models.FloatField()),
                ('locationy', models.FloatField()),
                ('name', models.CharField(max_length=255)),
                ('nr', models.IntegerField()),
                ('time', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('call_date', models.DateField()),
                ('points', models.IntegerField()),
                ('locationx', models.FloatField()),
                ('locationy', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('remind', models.DateField()),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=1023)),
            ],
        ),
        migrations.CreateModel(
            name='type',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=1023)),
                ('photo', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(max_length=255)),
                ('points', models.IntegerField()),
                ('photo', models.CharField(max_length=255)),
                ('join_date', models.DateField()),
                ('password', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='waypoint',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('locationx', models.FloatField()),
                ('locationy', models.FloatField()),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=1023)),
                ('photo', models.CharField(max_length=255)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='korkidb.user')),
            ],
        ),
        
        migrations.AddField(
            model_name='plan',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='korkidb.user'),
        ),
        migrations.AddField(
            model_name='event',
            name='type_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='korkidb.type'),
        ),
        migrations.AddField(
            model_name='event',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='korkidb.user'),
        ),
        migrations.AddField(
            model_name='destination',
            name='plan_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='korkidb.plan'),
        ),
    ]
