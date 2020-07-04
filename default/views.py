from django.shortcuts import render

# Create your views here.

def index(req):
    return render(req, 'default/index.html')


def about(req):
    return render(req, 'default/about.html')