from django.db import models

# Create your models here.
CHOICES=(
    ('1','1'),
    ('2','2'),
    ('3','3'),
)
class Link(models.Model):
    name=models.CharField(max_length=50,null=True)
    url=models.CharField(max_length=100)
    rank=models.CharField(max_length=1,choices=CHOICES)
    created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.url)