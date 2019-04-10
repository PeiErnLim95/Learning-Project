from django.shortcuts import render
from .models import Post

def home(request):
	context = {
		'posts': Post.objects.all()
	}
	return render(request, 'blogger/home.html', context)

def about(request):
	return render(request, 'blogger/about.html', {'title': 'About Us'})
