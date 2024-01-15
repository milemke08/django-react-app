# Python script content
from rest_framework import serializers
# from .models import Project, Phase, Task, ChatSession, ChatDialogue, ChatLineFormat, ChatLine, GPTModel, Step
from .models.node import Node
class NodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Node
        fields = '__all__'