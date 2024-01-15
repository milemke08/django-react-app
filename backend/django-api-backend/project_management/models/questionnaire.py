from django.db import models
from django.utils import timezone
# Create your models here.

    
class Questionnaire(models.Model):
    """
    A model representing a Questionnaire. 
    """
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Question(models.Model):
    questionnaire = models.ForeignKey(Questionnaire, on_delete=models.CASCADE, related_name='questions')
    name = models.CharField(max_length=128)
    question = models.CharField(max_length=1024)
    response = models.TextField(blank=True, null=True)
    is_completed = models.BooleanField(default=False)
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.questionnaire.name}: Q  {self.pk} - {self.question}"
