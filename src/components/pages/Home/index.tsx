import React from "react";
import { useLoaderData } from "react-router-dom";
import product from "../../../models/product";

const Home = () => {
  const loaderData = useLoaderData();
  console.log("loaderData: ", loaderData);

  return <div>I'm Home Page</div>;
};

export default Home;
