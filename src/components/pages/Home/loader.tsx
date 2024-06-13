import axios from "axios";
import { homeLoaderData } from "../../../models/homeLoaderData";

const loader = async (): Promise<homeLoaderData> => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return { data: response.data };
  } catch (error: any) {
    return { error: error.message };
  }
};

export default loader;
