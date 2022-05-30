import { useEffect, useState } from "react";

export const useGetUrls = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const getUrls = async () => {
      const id = "7YXamvsw6hSppoy-s2ggg";

      try {
        const response = await fetch(`${process.env.GATSBY_APIURL}/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setUrls(data.body.link);
      } catch (error) {
        console.log(error);
      }
    };
    getUrls();
  }, []);
  return urls;
};
