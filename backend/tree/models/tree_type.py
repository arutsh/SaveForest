from django.db import models
from basemodel.models import BaseModel

class TreeType(BaseModel):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=1000, null=True, blank=True)
    lifespan = models.IntegerField(null=True, blank=True)
    # Approx Oxygen produced by muture tree per day in liters 
    oxygen=models.IntegerField(null=True, blank=True)



