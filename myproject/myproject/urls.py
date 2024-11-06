from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from cookapp.views import RecipeView, CategoryView
from rest_framework.schemas import get_schema_view

router = DefaultRouter()
router.register(r'recipes', RecipeView, basename='recipe')  
router.register(r'categories', CategoryView, basename='category') 

schema_view = get_schema_view(
    title='Recipe API',
    description='API for managing recipes',
    version='1.0.0',
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('openapi/', schema_view, name='openapi-schema'),
    
]