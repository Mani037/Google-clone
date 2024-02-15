"use client";

import React, { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=CWGCplYHWtCWtfP8SxAR`
      )
        .then((res) => res.json())
        .then((data) => data.country);

      if (!response) {
        return;
      }
      setCountry(response);
    };
    getCountry();
  }, []);
  return <h1>{country}</h1>;
};

export default CountryLookup;
