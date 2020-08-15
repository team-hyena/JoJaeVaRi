from django import forms
from .models import Club
from django.core.validators import MaxValueValidator
from django_summernote import fields as summer_fields
from django import forms

class MakeClubForm(forms.ModelForm):
    description = summer_fields.SummernoteTextFormField(error_messages={'required':(u'데이터를 입력해주세요'),})
    class Meta:
         model = Club
         fields = ('thumbnail_url', 'name', 'title', 'description', 'location', 'period', 'start_time', 'min_participant_num', 'max_participant_num',)


