from django.shortcuts import render, redirect

from .forms import SignupForm
# from .forms import CustomSignupForm

# Create your views here.
def validate(req):
    # email과 전화번호로 계정이 등록 되어있는지 체크하기
    # account = req.POST
    # account.email

    # 정상 작동 시 마지막 사이트의 위치로 redirect 해야함, 일단 index로 redirect 하도록 처리
    return redirect('default:index')

def signup(req):
    # if req.method == 'POST':
    #     form = SignUpForm(req.POST)

    #     if form.is_valid():
    #         account = form.cleaned_data
    #         account.save()

    #         return redirect('club:index')
    #     else:
    #         # error
    #         return redirect('default:index')
        
    # else:
    #     form = SignUpForm()
    #     return render(req, 'accounts/signup.html', {'form': form})

    if req.method == 'POST':
        form = SignupForm(req.POST)
        # form = CustomSignupForm(req.POST)
        return redirect('club:index')
    else:
        return render(req, 'accounts/signup.html', {'form': form})