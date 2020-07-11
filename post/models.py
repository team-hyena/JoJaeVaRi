from django.db import models
from django_summernote import models as summer_model
from django_summernote import fields as summer_fields

# Create your models here.

class SummerNote(summer_model.Attachment):
    summer_field = summer_fields.SummernoteTextField(default='')


class Post(models.Model):
    title = models.CharField(max_length=10)
    content = models.TextField()

    def __str__(self):
        return self.title