import React, {  useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";


export default function UsersView() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/users"
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
    <div className="w-auto h-auto flex flex-wrap justify-evenly gap-5">
      {data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      
      
    </div>
  );
}
