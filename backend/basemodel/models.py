from django.db import models
from django.utils import timezone

# Create your models here.
class BaseModel(models.Model):
    '''
    BaseModel for all models,
    It will contain general fields like, when record was created and 
    # TODO who created and who updated
    '''
    created_on = models.DateTimeField(editable=False)
    modified_on = models.DateTimeField(editable=False)
    
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        # print(f"saving data, {self}, {self.id} {timezone.now()}")
        if not self.id:
            self.created_on = timezone.now()
        self.modified_on = timezone.now()
        # print(f"saving data, {self}, {self.id}{self.modified_on} {timezone.now()}")
        return super(BaseModel, self).save(*args, **kwargs)
    class Meta:
        abstract = True