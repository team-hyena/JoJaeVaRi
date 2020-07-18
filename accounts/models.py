from django.db import models

class Account(models.Model):
    # must have
    email = models.EmailField()

    name = models.CharField(max_length=50)
    password = models.CharField(max_length=256)    
    
    # optional
    age = models.IntegerField()
    gender = models.IntegerField()

    via_sns_type = models.IntegerField()
    via_sns_name = models.CharField(max_length=15)
