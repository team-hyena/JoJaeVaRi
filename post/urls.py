from django.urls import path
from . import views

app_name = 'post'

urlpatterns = [
    path('new_post', views.new_post, name='new_post'),
]