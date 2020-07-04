from django.urls import path
from . import views

app_name = 'club'

urlpatterns = [
    path('', views.index, name='index'),
    path('add/', views.add, name='add'),
    path('make/', views.make, name='make'),
    path('<int:club_id>/', views.detail, name='detail'),
    path('generator/', views.fake_generator, name='generator'),
]