import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import loadProductData from "../../Thunk/loadProductData";
import AddPost from "./AddPost";

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductData());
  }, []);

  return (
    <div className="max-w-7xl gap-8 mx-auto my-10 bg-gray-200 p-10">
      <AddPost></AddPost>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
