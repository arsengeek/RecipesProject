import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryDetail = () => {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8000/api/categories/${id}/`)
            .then(response => response.json())
            .then(data => {
                setRecipes(data.recipes);
                setCategoryName(data.name_category);
            })
            .catch(error => console.error('Error fetching category details:', error));
    }, [id]);

    return (
        <div>
            <h1>Категория: {categoryName}</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>
                            {recipe.name_recipe}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryDetail;
