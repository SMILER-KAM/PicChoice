from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm , UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import vote
from django.contrib import messages
from django.contrib.admin.views.decorators import staff_member_required

# Create your views here.

@login_required(login_url='loginuser')
def home(request):
    count1 = vote.objects.filter(choice='Picture 1').count()
    count2 = vote.objects.filter(choice='Picture 2').count()
    count3 = vote.objects.filter(choice='Picture 3').count()
    return render(request, 'vote/home.html', {'count1': count1,'count2': count2,'count3': count3})

def loginuser(request):
    if request.method=='GET':
        return render(request,'vote/loginuser.html')
    else:
        a=request.POST.get('username')
        b=request.POST.get('password')
        user=authenticate(request,username=a,password=b)
        if user is None:
            return render(request,'vote/loginuser.html',{'error':'Invalid Credentials!'})
        else:
            login(request,user)
            return (redirect('home'))

def signupuser(request):
    if request.method=='GET':
        return render(request,'vote/signupuser.html')
    else:
        a=request.POST.get('username')
        b=request.POST.get('password1')
        c=request.POST.get('password2')
        if(b==c):
            if(User.objects.filter(username=a).exists()):
                return render(request,'vote/signupuser.html',{'error':'User Already Exists!'})
            else:
                user=User.objects.create_user(username=a,password=b)
                user.save()
                login(request,user)
                return (redirect('home'))
        else:
            return render(request,'vote/signupuser.html',{'error':'Password Mismatched!'})
        
def logoutuser(request):
    if request.method=='GET':
        logout(request)
        return(redirect('home'))
    
@login_required(login_url='loginuser')
def castvote(request):
    if request.method=="POST":
        a=request.POST.get('choice')
        if(vote.objects.filter(user=request.user)):
            messages.error(request,'You Have Already Voted')
        else:
            vote.objects.create(user=request.user, choice=a)
            messages.success(request, f"Thank You , You voted for {a}.")
        return (redirect('home'))
    
@staff_member_required
def resetvotes(request):
    vote.objects.all().delete()
    messages.success(request, "All votes have been reset.")
    return redirect('home')