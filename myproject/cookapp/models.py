from django.db import models

class Recipes(models.Model):
    name_recipe = models.CharField(max_length=20)
    text_recipe = models.TextField(blank=False)
    category_recipe = models.ForeignKey('Category', related_name='recipes', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name_recipe
    
class Category(models.Model):
    name_category = models.CharField(max_length=20)   
     
    def __str__(self):
        return self.name_category