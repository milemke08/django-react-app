from django.contrib import admin
from .models import ChatSession, ChatDialogue, ChatLineFormat, ChatLine,GPTModel
# Register your models here.
admin.site.register(ChatSession)
admin.site.register(ChatDialogue)
admin.site.register(ChatLineFormat)
admin.site.register(ChatLine)
admin.site.register(GPTModel)