from django import forms
from .models import Club
from django.core.validators import MaxValueValidator
from django_summernote import fields as summer_fields
from .models import SummerNote
from django import forms

class MakeClubForm(forms.ModelForm):
    # name = forms.CharField(label='모임 이름을 입력하세요')
    # title = forms.CharField(label='모임 주제를 입력하세요')
    # description = forms.

    # location = forms.CharField(label='모임 장소를 입력하세요')
    # times = forms.IntegerField(validators=[MaxValueValidator(10)])

    class Meta:
        model = Club
        fields = ('name', 'title', 'description', 'location', 'period',)


# class PostForm(forms.ModelForm):
#      fields = summer_fields.SummernoteTextFormField(error_messages={'required':(u'데이터를 입력해주세요'),})
#      class Meta:
#            model = SummerNote
#            fields = ('name', 'fields', 'title', 'description', 'location', 'period',)
