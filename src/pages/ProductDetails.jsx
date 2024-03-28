import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetails() {
    const navigate =useNavigate()
    const { productId } = useParams(); 
    console.log(productId);
    
    

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${productId}`
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
    <div className=" flex flex-col gap-5 h-auto w-auto   text-white text-center  justify-center align-middle">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <span className="text-2xl "></span>
      <h1>Description</h1>
      <p>{data.description}</p>
      <div className="flex flex-wrap w-[80vw]  justify-between mx-auto gap-3">
        {data.images.map((image, index) => (
          <img
            key={index}
            alt="Image 3"
            className="h-[300px]  object-cover rounded-lg overflow-hidden border w-[300px] border-gray-200 dark:border-gray-800"
            height={300}
            src={image}
            width={500}
          />
        ))}
      </div>

      <div className=" w-300 flex gap-5 justify-center">
        <button onClick={() => navigate("/")} className="px-3 py-1 bg-white text-black hover:bg-green-500 cursor-pointer rounded-[30px]">
          Go back
        </button>
        <button className="px-3 py-1 bg-white text-black hover:bg-green-500 cursor-pointer rounded-[30px]">
          Add to cart
        </button>
      </div>
    </div>
  );
}
