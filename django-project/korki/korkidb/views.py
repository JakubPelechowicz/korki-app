from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
import calendar
from calendar import HTMLCalendar
from datetime import datetime

#geting current date
current_date = datetime.now()
#creating calendar
cal = HTMLCalendar().formatmonth(current_date.year,current_date.month)



def home(request):
    return render(request, 'home.html',{"cal":cal})


def login_user(request):
	if request.method == "POST":
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
			login(request, user)
			return redirect('home')
		else:
			messages.success(request, ("There Was An Error Logging In, Try Again..."))	
			return redirect('login')	


	else:
		return render(request, 'authenticate/login.html', {})


