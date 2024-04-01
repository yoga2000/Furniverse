import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setErr] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("res not ok");
        } else {
          return res.json();
        }
      })
      .then((data) => (setData(data), setLoad(false), console.log(data)))
      .catch((err) => (console.log(err), setErr(err)));
  }, []);
  return { data, load, err };
};
