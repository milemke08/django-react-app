from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
# Create your models here.


class Node(models.Model):
    """
    A model representing a Node. 
    """
    parent_node = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='child_nodes')
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=50, choices=(('inactive', 'Inactive'),
                                                        ('active', 'Active'),), default='inactive')

    def __str__(self):
        return self.name
    
    

class Dependency(models.Model):
    """
    A model representing a Node dependency. 
    """
    node = models.ForeignKey(Node, on_delete=models.CASCADE, related_name='dependencies')
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True, null=True)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    # type = models.CharField(max_length=50, choices=('Checklist', 'Questionnaire','Report','Diagram','Node'),  default='inactive')

    def __str__(self):
        return self.name

