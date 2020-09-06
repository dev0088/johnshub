# Create your views here.
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# def index(request):
#     # return HttpResponse('Hello from Python!')
#     return render(request, "index.html")

def index(request):
    if request.user.is_authenticated:
        return redirect(reverse("app"))
    else:
        return render(request, 'registration/login.html')

def home(request, *arg, **kwargs):
    if request.user.is_authenticated:
        return redirect(reverse("app"))
    else:
        return render(request, 'registration/login.html')

# @login_required
def dashboard(request):
    # context = {
    #     'permissions': json.dumps(list(request.user.get_all_permissions()))
    # }
    template = 'backend/app.html'
    return render(request, template)
