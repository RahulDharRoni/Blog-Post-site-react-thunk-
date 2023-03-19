import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct } from "../redux/actions/productAction";
// import EditPost from "../pages/Main/EditPost";
// import EditPost from "../pages/Main/EditPost";
import removeProductData from "../Thunk/removeProductData";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // const [edit, setEdit] = useState([]);
  // console.log(edit);
  const handleId = (id) => {
    navigate(`/product/${id}`);
  };

  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    const postEdit = {
      about: data.about,
    };
    console.log(postEdit);

    fetch(`http://localhost:5000/product/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postEdit),
    })
      .then((res) => res.json())
      .then((data) => dispatch(editProduct(data)));
  };

  return (
    <div className="shadow-lg relative rounded-lg border flex flex-auto text-black-900 justify-items-center  bg-white mt-4">
      <div className="w-100% mx-auto flex flex-col  w-1/2 bg-slate-200">
        <img src={product.picture} alt={product.name} className="w-full" />
        <span className=" text-gray-600 text-sm p-2">
          Email : {product.email}
        </span>
      </div>
      <div className="p-3 w-1/2">
        <h1 className="font-bold text-start text-2xl">{product.company}</h1>
        <hr className="text-black pb-3" />
        <p className="text-start mb-3 text-gray-500 text-sm">
          <span className="font-bold text-red-900">Post: </span>{" "}
          {product.about.split(" ").slice(0, 25).join(" ")}
          <span className="text-red-900 text-bold">...Read More</span>
        </p>
        <div className="flex flex-wrap justify-between">
          <h1 className="font-bold text-center text-sm text-red-900">
            Subject:{" "}
            <span className="text-gray-500">{product.name_company}</span>
          </h1>

          <p className="text-sm font-semibold text-gray-500">
            {" "}
            {product.phone}
          </p>
        </div>
        <div className="text-bold text-sm flex justify-between mt-4">
          <button
            onClick={() => dispatch(removeProductData(product._id))}
            className="border-2 hover:bg-gray-100 text-red-900 flex justify-between w-1/3 items-center rounded-lg pl-2 pr-2 pt-1 pb-1 text-sm"
          >
            {" "}
            <p className="text-sm"> Remove</p>
            <AiFillDelete></AiFillDelete>
          </button>
          {/* model */}
          <label
            for="my-modal-3"
            className="border-2 hover:bg-gray-100 text-red-900 flex justify-between w-1/3 items-center rounded-lg pl-2 pr-2 pt-1 pb-1 text-sm"
            onClick={() => handleId(product._id)}
          >
            Edit
            <AiFillEdit></AiFillEdit>
          </label>
          <input type="checkbox" id="my-modal-3" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box">
              {/* start */}
              <div>
                <div className="flex flex-col justify-center w-full items-center">
                  <label
                    for="my-modal-3"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <form
                    className=" p-3 rounded-md flex flex-wrap gap-3 max-w-3xl justify-center bg-white"
                    onSubmit={handleSubmit(submit)}
                  >
                    <div className="flex justify-center w-full">
                      <div className="flex flex-auto w-full justify-between p-2 items-center">
                        <label className="mb-2 flex w-1/3 " htmlFor="about">
                          EDIT YOUR POST
                        </label>
                        <input
                          className=" input input-bordered w-2/3 max-w-xs m-2"
                          type="text"
                          name="about"
                          id="about"
                          {...register("about")}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center w-full">
                      <button
                        className=" btn btn-outline btn-accent btn-sm"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>

                  {/* </Modal> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
