from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse

from django.conf import settings

from .models import Club
from .forms import MakeClubForm

# Create your views here.

def index(req):
    # club_list = Club.objects.all()

    # # club_list = []

    # # for club_item in club:
    # #     club_list.append({
    # #         'thumbnail_url': club_item.thumbnail_url,
    # #         'title': club_item.title,
    # #         'description': club_item.description,
    # #     })
    club_list_partial = Club.objects.all()[0:10] # Club.objects.filter(id__in=[start, end]) # Club.objects.all()
    club_list = list(club_list_partial.values())

    context = {
        'club_list': club_list,
    }

    # for club in club_list:
    #     print(club)

    return render(req, 'club/index.html', context)

def inf_scroll1(req):
    # print(req.GET['start'], req.GET['start'] + req.GET['count'])
    start = int(req.GET['start'])
    count = int(req.GET['count'])
    
    db_count = Club.objects.count()

    if db_count < count:
        count = db_count

    end = start + count

    # club_list_partial = Club.objects.all()
    # club_list_partial = Club.objects.filter(id__in=range(start, end))
    club_list_partial = Club.objects.filter(id__range=[start, end])
    club_list = list(club_list_partial.values())
    
    return JsonResponse({'club_list': club_list}, safe=False)

def inf_scroll2(req):
    paginate = int(req.GET['paginate'])
    start = (paginate-1) * settings.PAGINATE_SIZE
    end = paginate * settings.PAGINATE_SIZE
    club_list_partial = Club.objects.all()[start:end] # Club.objects.filter(id__in=[start, end]) # Club.objects.all()
    club_list = list(club_list_partial.values())
    
    return JsonResponse({'club_list': club_list}, safe=False)

def make(req):
    if req.method == 'POST':
        # club = Club(req)
        form = MakeClubForm(req.POST, req.FILES)
        
        print(form.is_valid())
        if form.is_valid():
            _data = form.cleaned_data
            print("asdfafs")
            print(_data['thumbnail_url'])
            club = Club(thumbnail_url=_data['thumbnail_url'], title=_data['title'], name=_data['name'], description=_data['description'], location = _data['location'], period = _data['period'], start_time = _data['start_time'], min_participant_num = _data['min_participant_num'], max_participant_num = _data['max_participant_num'])
            club.save()
            return redirect('club:index')
    else:
        form = MakeClubForm()

    return render(req, 'club/make.html', {'form': form})

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

        _d = faker.date_time()
        print(_d)

        _min = faker.pyint(1, 10)
        _step = faker.pyint(1, 10)
        _max = faker.pyint(_min + _step, 30)

        club = Club(thumbnail_url = f'https://placeimg.com/480/270/any/{faker.pyint(1)}',name = faker.language_name(), title = faker.color_name(), description = faker.paragraph(), location = faker.street_address(), period = faker.pyint(0, 10), start_time = timezone.make_aware(_d), min_participant_num = _min, max_participant_num = _max)
        club.save()

    return redirect('club:index')
