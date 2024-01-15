from django.shortcuts import render


import json
from rest_framework import viewsets,generics,status,views,response
from django.contrib.contenttypes.models import ContentType
# from rest_framework.response import Response
from .models.node import Node
from .serializers import NodeSerializer

# Create your views here.
class NodeViewSet(viewsets.ModelViewSet):
    queryset = Node.objects.all()
    serializer_class = NodeSerializer