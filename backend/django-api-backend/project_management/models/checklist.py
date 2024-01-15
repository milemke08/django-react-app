from django.db import models
from django.utils import timezone
# Create your models here.

    
class Checklist(models.Model):
    """
    A model representing a Checklist. 
    """
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class ChecklistStep(models.Model):
    checklist = models.ForeignKey(Checklist, on_delete=models.CASCADE, related_name='steps')
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True, null=True)
    is_completed = models.BooleanField(default=False)
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.checklist.name}: Step {self.pk} - {self.step_text}"
