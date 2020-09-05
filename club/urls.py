from django.urls import path
from . import views

app_name = 'club'

urlpatterns = [
    path('', views.index, name='index'),
    path('items1/', views.inf_scroll1, name='items1'),
    path('items2/', views.inf_scroll2, name='items2'),
    path('make/', views.make, name='make'),
    path('<int:club_id>/', views.detail, name='detail'),
    path('generator/', views.fake_generator, name='generator'),
    path('like/<club_id>/', views.club_like, name='club_like')
]