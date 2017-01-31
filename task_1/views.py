from django.shortcuts import render
from task_1.models import Examples
from django.http import HttpResponse


def main(request):
    return render(request, 'main.html', {'Examples': Examples.objects.all()})


def example_result(request):
    e_name = request.GET.get('name')
    discription = Examples.objects.filter(name=e_name)
    res = discription[0].example
    return HttpResponse(res)
