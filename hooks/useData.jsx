import { useEffect, useState } from "react";

export const useData = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, []);
    return {
        data
    }
}

