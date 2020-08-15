from django import forms
from django.utils.translation import ugettext_lazy as _

from .models import Profile

class SignupForm(forms.Form):
    class Meta:
        fields_order = ['username', 'email', 'password1', 'password2', 'age', 'gender',]
    # default type
    # email = forms.EmailField()
    # username = forms.CharField(max_length=50)

    # password = forms.PasswordInput()
    # password_check = forms.PasswordInput()

    # first_name = forms.CharField(max_length=50)
    # last_name = forms.CharField(max_length=50)

    # must have

    # option
    # gender = forms.ChoiceField(choices=[('male','남성'),('female','여성')], widget=forms.RadioSelect)
    # age = forms.IntegerField(max_value=100)

    age = forms.IntegerField(label=_('나이'), max_value=100, widget=forms.TextInput(attrs={'placeholder':_('age',),}))
    gender = forms.ChoiceField(choices=[('male','남성'),('female','여성')], widget=forms.RadioSelect)

    def signup(self, req, user):
        print(self.cleaned_data)
        print('--------')
        print(user)
        user.email = self.cleaned_data['email']
        user.username = self.cleaned_data['username']
        user.save()

        profile = Profile()
        profile.user = user
        profile.age = self.cleaned_data['age']
        profile.gender = self.cleaned_data['gender'] == 'male' and 0 or 1
        profile.save()

        # _member = self.cleaned_data

        # member.email = _member['email']
        # member.username = _member['username']
        
        # member.password = _member['password']

        # #auth area
        # member.first_name = _member['first_name']
        # member.last_name = _member['last_name']

        # member.age = _member['age']        

        # member.gender = _member['gender']
        # member.save()