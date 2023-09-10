from tree.models import *
from mixer.backend.django import mixer

case = 10

for i in range(case):
    tree_type = mixer.blend(TreeType)
    tree_type.save()
    