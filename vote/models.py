from django.db import models
from django.contrib.auth.models import User
import datetime

# Create your models here.

class vote(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    choice=models.CharField(max_length=40)
    date_time=models.DateTimeField('Date',default=datetime.datetime.today)

    def __str__(self):
        return f"{self.user.username} voted for {self.choice}"