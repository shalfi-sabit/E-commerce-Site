import React from "react";
import axios from "axios";
import { json } from "react-router-dom";

const loader = async () => {
  await axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      return json({ data: response.data });
    })
    .catch((error) => {
      return error;
    });
  return null;
};

export default loader;
