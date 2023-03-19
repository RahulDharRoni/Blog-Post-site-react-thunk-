import { addProduct } from "../redux/actions/productAction";

const addProductData = (newProduct) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/product", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(
        addProduct({
          _id: data.insertedId,
          ...newProduct,
        })
      );
    }
  };
};

export default addProductData;
