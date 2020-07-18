# Generated by Django 2.2.13 on 2020-07-18 12:01

from django.db import migrations, models
import django.db.models.deletion
import django_summernote.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('django_summernote', '0002_update-help_text'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=10)),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='SummerNote',
            fields=[
                ('attachment_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='django_summernote.Attachment')),
                ('summer_field', django_summernote.fields.SummernoteTextField(default='')),
            ],
            options={
                'abstract': False,
            },
            bases=('django_summernote.attachment',),
        ),
    ]
