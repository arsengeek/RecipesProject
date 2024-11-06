import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoryList from './CategoryList'; 
import RecipeDetail from './RecipeDetail';
import CategoryDetail from './CategoryDetail';
import SwaggerUIComponent from './SwaggerUIComponent';
import './App.css'

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/swagger">Api</Link>
            </nav>
            <Routes>
                <Route path='/swagger' element={<SwaggerUIComponent />} />
                <Route path="/" element={<CategoryList />} />
                <Route path="/category/:id" element={<CategoryDetail />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
            </Routes>
        </Router>
    );
};

export default App;