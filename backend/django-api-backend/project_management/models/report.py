from django.db import models
from django.utils import timezone
# Create your models here.

    
class Report(models.Model):
    """
    A model representing a Report. 
    """
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Section(models.Model):
    report = models.ForeignKey(Report, on_delete=models.CASCADE, related_name='sections')
    name = models.CharField(max_length=128)
    summary = models.CharField(max_length=1024)
    analysis = models.TextField(blank=True, null=True)
    is_completed = models.BooleanField(default=False)
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.report.name}: Section  {self.pk} - {self.name}"
