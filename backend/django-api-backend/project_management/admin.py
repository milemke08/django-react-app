from django.contrib import admin
from .models.checklist import Checklist, ChecklistStep
from .models.diagram import Diagram, Illustration
from .models.questionnaire import Questionnaire, Question
from .models.report import Report, Section
from .models.node import Node, Dependency
# Register your models here.
admin.site.register(Checklist)
admin.site.register(ChecklistStep)

admin.site.register(Diagram)
admin.site.register(Illustration)

admin.site.register(Questionnaire)
admin.site.register(Question)

admin.site.register(Report)
admin.site.register(Section)

admin.site.register(Node)
admin.site.register(Dependency)