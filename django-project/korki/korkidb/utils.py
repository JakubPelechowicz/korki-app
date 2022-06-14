from datetime import datetime, timedelta
from calendar import HTMLCalendar
from xml.dom import UserDataHandler
from .models import plan

class Calendar(HTMLCalendar):
	def __init__(self, year=None, month=None,user=None):
		self.year = year
		self.month = month
		self.user = user

		super(Calendar, self).__init__()

	# formats a day as a td
	# filter events by day
	def formatday(self, day, events):
		events_per_day = events.filter(date__day=day)
		d = ''
		for event in events_per_day:
			d += f'<li><div class="tooltip">{event.name}<span class="tooltiptext">{event.description}</span></div></li>'

		if day != 0:
			return f"<td><span class='date'>{day}</span><ul> {d} </ul></td>"
		return '<td></td>'

	# formats a week as a tr 
	def formatweek(self, theweek, events):
		week = ''
		for d, weekday in theweek:
			week += self.formatday(d, events)
		return f'<tr> {week} </tr>'

	# formats a month as a table
	# filter events by year and month
	def formatmonth(self, withyear=True):
		if(self.user.id!=None):
			events = plan.objects.filter(date__year=self.year, date__month=self.month,user_id=self.user)
		else:
			events = plan.objects.filter(date__year=2137)
		cal = f'<table border="0" cellpadding="0" cellspacing="0" class="calendar">\n'
		cal += f'{self.formatmonthname(self.year, self.month, withyear=withyear)}\n'
		cal += f'{self.formatweekheader()}\n'
		for week in self.monthdays2calendar(self.year, self.month):
			cal += f'{self.formatweek(week, events)}\n'
		return cal