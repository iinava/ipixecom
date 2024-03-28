import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function CategoryView()  {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams(); 
    console.log(categoryId);
    
  
    const navigate = useNavigate();
    const handleClick = (productId) => {
      
      navigate(`/productdetails/${productId}`);
    };
  
    useEffect(() => {
      let mounted = true;
  
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
          );
          if (mounted) {
            setData(response.data);
            console.log(data);
            setError(null);
          }
        } catch (error) {
          if (mounted) {
            setError(error);
            setData(null);
          }
        } finally {
          if (mounted) {
            setLoading(false);
          }
        }
      };
  
      fetchData();
  
      return () => {
        mounted = false;
      };
    }, []);
    useEffect(() => {
      console.log(data, "data loaded");
    }, [data]);
  
    if (loading) return <div className="text-white text-center font-bold text-5xl mt-56">Loading...</div>;
    if (error) return <div className="text-white">Error: {error.message}</div>;
    if (!data) return null;
  
    return (
      <>
        <h1 className="text-white text-3xl font-bold text-center">Products</h1>
        <div class="w-auto h-auto flex flex-wrap justify-evenly mt-5 gap-5 ">
          {data.map((product) => (
              <div key={product.id}  onClick={() => handleClick(product.id)} >
         
            <ProductCard  
              
              title={product.title}
              price={product.price}
              image={product.images[0]}
            /></div>
          ))}
        </div>
      </>
    );
  }
  