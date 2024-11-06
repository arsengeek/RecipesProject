import React, { useEffect, useState } from 'react';

const CategoryList = () => {
    const [recipe, setRecipe] = useState([]); 

    useEffect(() => {
        fetch(`http://localhost:8000/api/categories/recipes${recipe.id}`) 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setRecipe(data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div>
            <h1>Recipes List</h1>
            {recipe.length === 0 ? ( 
                <p>No recipe available.</p>
            ) : (
                <ul>
                    {recipe.map(recipe => (
                        <li key={recipe.id}>
                            <h2>{recipe.name_recipe}</h2>
                            <h2>{recipe.text_recipe}</h2>
                            <h2>{recipe.category_recipe}</h2>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryList;
