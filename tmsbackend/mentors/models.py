from django.db import models 
from institute.models import Standard

class Mentor(models.Model):
    name = models.CharField(max_length=255)
    uid = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=200)  
    created_date = models.DateTimeField(auto_now_add=True)
    last_active = models.DateTimeField(auto_now=True)
    profile_image = models.FileField(upload_to='mentors/profileImages', null=True, blank=True)

    background_image = models.FileField(upload_to='mentors/backgroundImages', null=True, blank=True)
    moto = models.CharField(max_length=500, null=True, blank=True)

    standards = models.ManyToManyField(Standard, related_name="mentors")

    def __str__(self):
        return self.name
