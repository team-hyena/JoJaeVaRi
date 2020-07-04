from django import forms

from .models import Club
from django.core.validators import MaxValueValidator

class MakeClubForm(forms.ModelForm):
    # name = forms.CharField(label='모임 이름을 입력하세요')
    # title = forms.CharField(label='모임 주제를 입력하세요')
    # description = forms.

    # location = forms.CharField(label='모임 장소를 입력하세요')
    # times = forms.IntegerField(validators=[MaxValueValidator(10)])

    class Meta:
        model = Club
        fields = ('name', 'title', 'description', 'location', 'period',)