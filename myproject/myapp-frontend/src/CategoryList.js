import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/categories/')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div>
            <h1>Список категорий</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/category/${category.id}`}>
                            {category.name_category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
