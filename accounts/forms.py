from django import forms

class SignupForm(forms.Form):
    # must have
    email = forms.EmailField()

    name = forms.CharField(max_length=50)
    password = forms.PasswordInput()
    password_check = forms.PasswordInput()

    # option
    gender = forms.ChoiceField(choices=[('',''),('','')], widget=forms.RadioSelect)
    age = forms.IntegerField(max_value=100)

# from django import forms
# from allauth.account.forms import SignupForm

# class CustomSignupForm(SignupForm):
#     def save(self, req):
#         user = super(CustomSignupForm, self).save(req)
#         return user

    