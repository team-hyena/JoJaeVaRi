from django.shortcuts import render
from django.template import RequestContext

# Create your views here.

def index(req):
    return render(req, 'default/index.html')


def about(req):
    return render(req, 'default/about.html')

def page_not_found_page(req, exception):    
    return render(req, 'default/404.html', status=404)

def server_error_page(req):
    return render(req, 'default/500.html', status=500)