from django import forms
from .models import Club
from django.core.validators import MaxValueValidator
from django_summernote import fields as summer_fields
from django import forms
from django.forms import MultiWidget

class CustomDateInput(forms.DateInput):
    input_type = 'date'

class CustomTimeInput(forms.TimeInput):
    input_type = 'time'

class CustomDateTimeInput(forms.DateTimeInput):
    input_type = 'datetime-local'


class MakeClubForm(forms.ModelForm):
    description = summer_fields.SummernoteTextFormField(error_messages={'required':(u'데이터를 입력해주세요'),})
    # start_time = forms.SplitDateTimeField(widget=MultiWidget(widgets=[CustomDateInput, CustomTimeInput]))
    # start_time = forms.SplitDateTimeField(widget=CustomDateTimeInput)
    start_time = forms.DateTimeField(widget=CustomDateTimeInput, input_formats=["%Y-%m-%dT%H:%M", "%Y-%m-%d %H:%M"])
    thumbnail_url = forms.FileField(label="Thumbnail", widget=forms.FileInput(attrs={"class": "custom-file-input", 
                    "aria-describedby": "inputGroupFileAddon01",}))
    class Meta:
        model = Club
        fields = ('title', 'thumbnail_url', 'location', 'start_time', 'period', 'min_participant_num', 'max_participant_num', 'description', )


