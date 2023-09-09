from django.db import models
from basemodel.models import BaseModel
from . import *

class Tree(BaseModel):

    # each tree in inventory has unique tag / identifier
    identifier = models.CharField(max_length=50)
    type = models.ForeignKey(TreeType, on_delete=models.SET_NULL)
    # TODO location can be more specific, defined in seperate model
    #  or geo location... something can be discussed with user
    location = models.CharField(max_length=100)
    # approximate planted date if unknown
    planted_on = models.DateField()


    
    



