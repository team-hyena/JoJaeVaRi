from django.shortcuts import render

from .models import Club
# Create your views here.

def index(req):
    club = Club.objects.all()

    club_list = []

    for club_item in club:
        club_list.append({
            'thumbnail_url': club_item.thumbnail_url,
            'title': club_item.title,
            'description': club_item.description,
        })

    context = {
        'club_list': club_list,
    }

    return render(req, 'club/index.html', context)

def detail(req, club_id):
    club = get_object_or_404(Club, id=club_id)

    context = {
        'club': club,
    }

    return render(req, 'club/detail.html', context)