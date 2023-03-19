// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// // import { useDispatch } from "react-redux";
// // import addProductData from "../../Thunk/addProductData";

// const EditPost = ({ product }) => {
//   // const [modalIsOpen, setIsOpen] = React.useState(false);
//   // const { _id } = pro;
//   // console.log(product._id);

//   const [edit, setEdit] = useState([]);
//   // console.log(edit);
//   // const dispatch = useDispatch();
//   const { register, handleSubmit } = useForm();

//   const submit = (data) => {
//     const postEdit = {
//       about: data.about,
//     };
//     // console.log(postEdit);
//     fetch(`http://localhost:5000/product/${product._id}`, {
//       method: "PUT",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(postEdit),
//     })
//       .then((res) => res.json())
//       .then((data) => setEdit(data));
//   };

//   return (
//     <div>
//       <div className="flex flex-col justify-center w-full items-center">
//         <label
//           for="my-modal-3"
//           class="btn btn-sm btn-circle absolute right-2 top-2"
//         >
//           ✕
//         </label>
//         <form
//           className=" p-3 rounded-md flex flex-wrap gap-3 max-w-3xl justify-center bg-white"
//           onSubmit={handleSubmit(submit)}
//         >
//           <div className="flex justify-center w-full">
//             <div className="flex flex-auto w-full justify-between p-2 items-center">
//               <label className="mb-2 flex w-1/3 " htmlFor="about">
//                 EDIT YOUR POST
//               </label>
//               <input
//                 className=" input input-bordered w-2/3 max-w-xs m-2"
//                 type="text"
//                 name="about"
//                 id="about"
//                 {...register("about")}
//               />
//             </div>
//           </div>

//           <div className="flex justify-between items-center w-full">
//             <button
//               className=" btn btn-outline btn-accent btn-sm"
//               type="submit"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//         {/* </Modal> */}
//       </div>
//     </div>
//   );
// };

// export default EditPost;
