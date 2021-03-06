from django.contrib import admin
from club.models import Club
# Register your models here.
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.

# class Club(models.Model):
#     thumbnail_url = models.ImageField(upload_to='club/%Y/%m/%d', blank=True)
#     name = models.CharField(max_length=50)
#     title = models.CharField(max_length=100)
#     description = models.TextField(blank=True)
#     location = models.CharField(max_length=100)
#     period = models.IntegerField(validators=[MinValueValidator(0)])
#     start_time = models.DateTimeField()
#     min_participant_num = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(10)])
#     max_participant_num = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(30)])

class ClubAdmin(admin.ModelAdmin):
    def club_like_count(self, obj):
        return obj.like_users.count()
    club_like_count.short_description = 'club like count'
    list_display = ['title', 'club_like_count']

    fieldsets = [
        ("List", {'fields': ['thumbnail_url', 'name']}),
        ('Detail info',{'fields': ['title', 'description', 'location', 'period', 'start_time', 'min_participant_num', 'max_participant_num']}),
    ]
    list_filter = ['start_time']
    search_fields = ['name']
    
    


class ChoiceInline(admin.TabularInline):
    model = Club



admin.site.register(Club, ClubAdmin)

