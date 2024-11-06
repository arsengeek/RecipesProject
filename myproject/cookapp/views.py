from django.shortcuts import render
from rest_framework import viewsets
from .models import Category, Recipes
from .serializers import RecipeSerializer, CategorySerializer
from rest_framework.response import Response
from .models import Recipes, Category
from rest_framework.decorators import action

class CategoryView(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def recipes(self, request, pk=None):
        category = self.get_object()
        recipes = category.recipes.all()
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)

class RecipeView(viewsets.ReadOnlyModelViewSet):
    queryset = Recipes.objects.all()
    serializer_class = RecipeSerializer