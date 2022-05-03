import { useEffect, useState } from "react";

export const useGetUrls = () => {
  const [url, setUrl] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    const getUrls = async () => {
      const id = "7YXamvsw6hSppoy-s2ggg";
      setLoading(true);
      try {
        const response = await fetch(`${process.env.GATSBY_APIURL}/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        // setTimeout(() => {
        setUrl(data.body.link);
        setLoading(false);
        // }, 3000);
      } catch (error) {
        setError("Grupo Whatsapp no disponible intente mas tarde");
        console.log(error);
      }
    };
    getUrls();
  }, []);
  return { url, loading, error };
};
