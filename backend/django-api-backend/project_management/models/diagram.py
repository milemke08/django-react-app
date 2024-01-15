from django.db import models
from django.utils import timezone
# Create your models here.

    
class Diagram(models.Model):
    """
    A model representing a Diagram. 
    """
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Illustration(models.Model):
    diagram = models.ForeignKey(Diagram, on_delete=models.CASCADE, related_name='illustrations')
    name = models.CharField(max_length=128)
    illustration_img = models.ImageField(upload_to='diagrams/')
    analysis = models.TextField(blank=True, null=True)
    is_completed = models.BooleanField(default=False)
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.report.name}: Section  {self.pk} - {self.name}"
