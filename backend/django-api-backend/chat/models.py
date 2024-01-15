from django.db import models
from django.utils import timezone
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

# Create your models here.
class ChatSession(models.Model):
    """
    A model representing a Chat GPT Chat session. ChatSessions can belong to a Project, Phase, or Task.
    """
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    timestamp = models.DateTimeField(default=timezone.now)

class ChatDialogue(models.Model):
    """
    A model representing a single user query, and Chat GPT Chat response pair. ChatDialogues belong to a ChatSession.
    """
    session = models.ForeignKey(ChatSession, on_delete=models.CASCADE, related_name='messages')
    gpt_model = models.ForeignKey('GPTModel', on_delete=models.SET_NULL, null=True, blank=True, related_name='gpt_model')
    timestamp = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return f"Dialogue from Session: {self.session.id}, {self.id}"
    
class ChatLineFormat(models.Model):
    """
    A model representing the formating style of a Chat GPT response.
    """
    line_type = models.CharField(max_length=50, blank=False, null=False) #ex. header, list, code snip
    format_text = models.CharField(max_length=50, blank=False, null=False) #ex. <h2>, <ul>, <code>
    def __str__(self):
        return f"Formatted as: {self.format_text}"
    
class ChatLine(models.Model):
    """
    A model representing an individual line of a Chat GPT response.
    """
    line_number = models.IntegerField() #line number of the line in the chatDialogue
    content = models.TextField()
    prompt = models.TextField()
    response = models.TextField()
    line_format = models.ForeignKey(ChatLineFormat, on_delete=models.SET_NULL, blank=True, null=True, related_name='line_format')
    chatDialogue = models.ForeignKey(ChatDialogue, on_delete=models.CASCADE, blank=False, null=False, related_name='lines')
    line_type = models.CharField(max_length=30, choices=[('user_input', 'User Input'), ('user_input_context', 'User Input Context'), ('api_response', 'API Response')])
    def __str__(self):
            return f"{self.chatDialogue},{self.id}, {self.line_type}, {self.line_number}"
    
class GPTModel(models.Model):
    name = models.CharField(max_length=100)
    version = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    def __str__(self):
        return self.name
    
class GPTPrompt(models.Model):
    phrase = models.TextField()
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.phrase