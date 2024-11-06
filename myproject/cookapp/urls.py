
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryView, RecipeView

router = DefaultRouter()
router.register(r'recipes', RecipeView, basename='recipe')  
router.register(r'categories', CategoryView, basename='category') 

urlpatterns = [
    path('', include(router.urls)),
    path('categories/<id>', CategoryView, name='sorted-recipes-by-category'),
    path('recipes/<id>', RecipeView.as_view(), name='sorted-recipes')
]