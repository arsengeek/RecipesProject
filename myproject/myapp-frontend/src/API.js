import React, { useEffect, useState } from 'react';
import axios from 'axios';


const API = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/recipes/');
                setRecipes(response.data); // Устанавливаем данные рецептов
                setLoading(false); // Устанавливаем состояние загрузки в false
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setError(error.message); // Устанавливаем сообщение об ошибке
                setLoading(false); // Устанавливаем состояние загрузки в false
            }
        };

        fetchRecipes(); // Вызываем функцию для получения данных
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>; // Показываем индикатор загрузки
    }

    if (error) {
        return <div className="error">Error: {error}</div>; // Показываем сообщение об ошибке
    }

    return (
        <div className="recipes-container">
            <h1>Recipes</h1>
            {recipes.map((category) => (
                <div key={category.category} className="category">
                    <h2 className="category-title">{category.category}</h2>
                    <ul className="recipe-list">
                        {category.recipes.map(recipe => (
                            <li key={recipe.id} className="recipe-item">
                                <h3 className="recipe-name">{recipe.name_recipe}</h3>
                                <p className="recipe-description">{recipe.text_recipe}</p>
                                <p className="recipe-category">Category: {recipe.category_recipe.name_category}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default API;
