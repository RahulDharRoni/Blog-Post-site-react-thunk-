import { removeProduct } from "../redux/actions/productAction";

const removeProductData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(dispatch(removeProduct(id)));
    }
  };
};

export default removeProductData;
