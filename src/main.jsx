import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Category from './pages/Category.jsx';
import CategoryView from './pages/CategoryView.jsx';
import UsersView from './pages/UsersView.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsPage />} />
          <Route path="category" element={<Category />} />
          <Route path="categoryview/:categoryId" element={<CategoryView />} />
          <Route path="productdetails/:productId" element={<ProductDetails />} />
          <Route path="usersview" element={<UsersView />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
