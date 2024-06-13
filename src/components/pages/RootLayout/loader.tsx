import React from "react";
import axios from "axios";
import { json } from "react-router-dom";
import { homeLoaderData } from "../../../models/homeLoaderData";

const loader = async (): Promise<homeLoaderData> => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return { data: response.data };
  } catch (error: any) {
    throw new Response(JSON.stringify({ message: "anything" }), {
      status: 500,
    });
  }
};

export default loader;
