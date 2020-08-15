from django.shortcuts import render, redirect

# Create your views here.

# def signup(req, member_info):
#     # if req.method == 'POST':
#     #     form = SignUpForm(req.POST)

#     #     if form.is_valid():
#     #         account = form.cleaned_data
#     #         account.save()

#     #         return redirect('club:index')
#     #     else:
#     #         # error
#     #         return redirect('default:index')
        
#     # else:
#     #     form = SignUpForm()
#     #     return render(req, 'accounts/signup.html', {'form': form})

#     if req.method == 'POST':
#         form = SignupForm(req.POST)
#         # form = CustomSignupForm(req.POST)
#         return redirect('club:index')
#     else:
#         return render(req, 'accounts/signup.html', {'form': SignupForm()})