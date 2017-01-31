from django.shortcuts import render
from task_1.models import Examples


def main(request):
    return render(request, 'main.html', {'Examples': Examples.objects.all()})
