import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

const navigate = useNavigate()
  const handleClick = (categoryid)=>{
    navigate(`/categoryview/${categoryid}`);
  }

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories"
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
    <div>
      <h1 className="text-white text-2xl  font-bold text-center mb-3 "> Product category</h1>
      <div className="w-auto h-auto flex flex-wrap justify-evenly gap-5">
        {data.map((Category) => (
            <div key={Category.id} onClick={() => handleClick(Category.id)}>
          <CategoryCard title={Category.name} image={Category.image} /></div>
        ))}
      </div>
    </div>
  );
}
