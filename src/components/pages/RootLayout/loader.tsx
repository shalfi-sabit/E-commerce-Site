import axios from "axios";
import { homeLoaderData } from "../../../models/homeLoaderData";
import { defer } from "react-router-dom";
import product from "../../../models/product";

const loadProducts = async (): Promise<product[]> => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error: any) {
    throw new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
};

const loader = async () => {
  return defer({ products: loadProducts() });
};

export default loader;
