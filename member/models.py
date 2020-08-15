# from django.contrib.auth.models import AbstractUser
from django.db import models

from django.conf import settings
# Create your models here.

class Profile(models.Model):
    # AbstractUser default property
    # email = models.EmailField()
    # username = models.CharField(max_length=50)    
    # password = models.CharField(max_length=256)    
    # first_name = models.CharField(max_length=50)
    # last_name = models.CharField(max_length=50)

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    via_sns_type = models.IntegerField()
    via_sns_name = models.CharField(max_length=15)

    # auth optional
    age = models.IntegerField()
    gender = models.IntegerField()

    class Meta:
        db_table = 'account_profile'
        app_label = 'account' # account app에서 관리되도록 하기 위함
