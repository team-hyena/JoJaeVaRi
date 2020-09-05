from django import forms
from django.utils.translation import ugettext_lazy as _

from allauth.account.forms import LoginForm, PasswordField
from allauth.account import app_settings
from allauth.account.app_settings import AuthenticationMethod
from allauth.account.models import EmailAddress
from allauth.utils import set_form_field_order, get_username_max_length

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

    age = forms.IntegerField(label=_('나이'), min_value=1, max_value=100, widget=forms.NumberInput(attrs={'placeholder':_('age',),}))
    gender = forms.ChoiceField(label=_('성별'), choices=[('male','남성'),('female','여성')], widget=forms.RadioSelect)

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



# class MyCustomLoginForm(LoginForm):
#     def __init__(self, *args, **kwargs):
#         self.request = kwargs.pop('request', None)
#         super(LoginForm, self).__init__(*args, **kwargs)
#         if app_settings.AUTHENTICATION_METHOD == AuthenticationMethod.EMAIL:
#             login_widget = forms.TextInput(attrs={ 'type': 'email',
#                                                     'class': 'login', 
#                                                     'placeholder': _('E-mail address'),
#                                                     'autofocus': 'autofocus'})
#             login_field = forms.EmailField(label=_("이메일"),
#                                             widget=login_widget)
#         elif app_settings.AUTHENTICATION_METHOD \
#                 == AuthenticationMethod.USERNAME:
#             login_widget = forms.TextInput(attrs={ 'class': 'login w-100',
#                                                     'placeholder': _('Username'),
#                                                     'autofocus': 'autofocus'})
#             login_field = forms.CharField(label=_("Username"),
#                                             widget=login_widget, max_length=get_username_max_length())

#         self.fields["login"] = login_field

#         set_form_field_order(self, ["login", "password", "remember"])
#         if app_settings.SESSION_REMEMBER is not None:
#             del self.fields['remember']
