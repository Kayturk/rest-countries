import { useState, useEffect } from "react";

export const useFetch = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://restcountries.com/v2/all?fields=name,capital,population,region,flag,subregion,languages,currencies,borders,topLevelDomain"
        );
        const data = await response.json();
        console.log(data);
        setLoading(false);
        setCountries(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  const search = (e) => {
    const word = e.target.value.toLowerCase();
    if (word.length === 0) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            "https://restcountries.com/v2/all?fields=name,capital,population,region,flag,subregion,languages,currencies,borders,topLevelDomain"
          );
          const data = await response.json();
          setLoading(false);
          setCountries(data);
        } catch (error) {
          console.log(error);
          setError(error);
        }
      };
      fetchData();
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v2/name/${word}?fields=name,capital,population,region,flag,subregion,languages,currencies,borders,topLevelDomain`
          );
          const data = await response.json();
          setCountries(data);
        } catch (error) {
          // console.log(error);
          // setError(error);
          console.log('something went wrong');
    
        }
      };
      fetchData();
    }
  };

  const region = (e) => {
    const keyword = e.target.id;
    console.log(keyword);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v2/region/${keyword}?fields=name,capital,population,region,flag,subregion,languages,currencies,borders,topLevelDomain`
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  };

  return { countries, search, region, loading, error };
};
