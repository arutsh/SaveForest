from django.db import models
from basemodel.models import BaseModel
from . import *

class TreeRecord(BaseModel):

    # each tree in inventory has unique tag / identifier

    tree = models.ForeignKey(Tree, on_delete=models.SET_NULL, null=True)
    comments = models.CharField(null=True, blank=True, max_length=1000)
    is_healthy = models.BooleanField()
    is_cut = models.BooleanField()
    # approximate hight of the tree
    height = models.FloatField(null=True, blank=True)
    # approx circumference of the tree
    circumference = models.FloatField(null=True, blank=True)
    # TODO URL TO image maybe note the image field
    image = models.CharField(max_length=200)
    set_alart = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.tree.identifier
    
    


    
    



