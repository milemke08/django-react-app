from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')


from django.urls import reverse
from django.http import JsonResponse

def get_google_oauth_url(request):
    url = request.build_absolute_uri(reverse('social:begin', args=('google-oauth2',)))
    return JsonResponse({'googleAuthUrl': url})
