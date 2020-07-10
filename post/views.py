from django.shortcuts import render
from post.models import Post
from post.forms import PostForm

# Create your views here.

def new_post(request):
    form = PostForm()
    return render(request, 'new_post.html', {'form': form})