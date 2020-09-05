from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.

class Club(models.Model):
    thumbnail_url = models.ImageField(upload_to='club/%Y/%m/%d', blank=True)
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=100)
    period = models.IntegerField(validators=[MinValueValidator(0)])
    start_time = models.DateTimeField()
    min_participant_num = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(10)])
    max_participant_num = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(30)])

    def __str__(self):
        return self.title
    