from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.

class Club(models.Model):
    thumbnail_url = models.ImageField(upload_to='club/%Y/%m/%d', blank=True)
    name = models.CharField(max_length=30)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    location = models.CharField(max_length=50)
    period = models.DateField(max_length=50)
    start_time = models.DateTimeField()
    min_participant_num = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(10)])
    max_participant_num = models.IntegerField()
