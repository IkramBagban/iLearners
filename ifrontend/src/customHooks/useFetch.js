import React, { useState, useEffect } from "react";
import { getData } from "../utils/api";

const useFetch = (endpoint) => {
  const [dataState, setDataState] = useState({
    data: null,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(endpoint);
        setDataState({ data: data, isLoading: false, isError: false });
      } catch (error) {
        setDataState({ data: null, isLoading: true, isError: error });
        console.log(error);
      }
    };
    fetchData();
  }, [endpoint]);

  return {
    data: dataState.data,
    isLoading: dataState.isLoading,
    isError: dataState.isError,
  };
};

export default useFetch;
