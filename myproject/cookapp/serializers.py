from rest_framework import serializers
from .models import Recipes, Category

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True)  

    class Meta:
        model = Category
        fields = '__all__'
