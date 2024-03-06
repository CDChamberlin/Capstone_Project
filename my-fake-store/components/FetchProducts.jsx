import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchProducts({ onDataFetched }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products", {
          params: { timestamp: new Date().getTime() },
        });
        onDataFetched(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading ? <h1>Loading Products</h1> : <></>;
}
