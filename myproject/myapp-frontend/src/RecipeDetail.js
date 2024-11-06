import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/recipes/${id}/`)
            .then(response => response.json())
            .then(data => setRecipe(data))
            .catch(error => console.error('Error fetching recipe:', error));
    }, [id]);

    if (!recipe) return <p>Загрузка рецепта...</p>;

    return (
        <div>
            <h1>{recipe.name_recipe}</h1>
            <p>{recipe.text_recipe}</p>
        </div>
    );
};

export default RecipeDetail;
