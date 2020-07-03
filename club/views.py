from django.shortcuts import render, redirect, get_object_or_404

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

from faker import Faker
from faker.providers import internet

from datetime import datetime
from django.utils import timezone

def fake_generator(req):

    if Club.objects.all().count() > 0:
        Club.objects.all().delete()

    faker = Faker(['ko_KR', 'en_US', 'en_GB', 'es_ES'])

    rep = faker.pyint(0, 100)

    for _ in range(rep):

        _date_time = faker.date_time()
        v = datetime.strptime(_date_time)
        print("datetime: ", _date_time, type(_date_time))

        _min = faker.pyint(1, 10)
        _step = faker.pyint(1, 10)
        _max = faker.pyint(_min + _step, 30)

        club = Club(name = faker.name(), title = faker.color(), description = faker.paragraph(), location = faker.street_address(), period = faker.pyint(0, 10), start_time = timezone.make_aware(v), min_participant_num = _min, max_participant_num = _max)
        club.save()

    return redirect('club:index')