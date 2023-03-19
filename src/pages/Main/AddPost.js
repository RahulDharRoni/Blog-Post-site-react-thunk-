import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { useDispatch } from "react-redux";
import addProductData from "../../Thunk/addProductData";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddPost = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const submit = (data) => {
    const product = {
      name: data.name,
      picture: data.picture,
      about: data.about,
      email: data.email,
      company: data.company,
      name_company: data.name_company,
      phone: data.phone,
    };

    console.log(product);
    dispatch(addProductData(product));
  };
  return (
    <div>
      <div className="flex flex-auto justify-center">
        <button
          onClick={openModal}
          type="button"
          className=" text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
        >
          <BsNewspaper className="mr-3"></BsNewspaper>
          POST YOUR ARTICLE
        </button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex justify-between w-full text-2xl  p-3 font-bold font-serif">
            <div className="text-center text-red-900">Post Your Blog</div>
            <AiOutlineClose onClick={closeModal} />
          </div>

          <hr />
          <form
            className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
            onSubmit={handleSubmit(submit)}
          >
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                id="name"
                {...register("name")}
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2" htmlFor="picture">
                Picture
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                name="picture"
                id="picture"
                {...register("picture")}
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2" htmlFor="name">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="input input-bordered w-full max-w-xs"
                {...register("company")}
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="email"
                name="email"
                id="email"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="number"
                name="phone"
                id="phone"
                {...register("phone")}
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2" htmlFor="name_company">
                Subject
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                name="name_company"
                id="name_company"
                {...register("name_company")}
              />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col w-full">
                <label className="mb-2" htmlFor="about">
                  Blog Post Article
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  name="about"
                  id="about"
                  {...register("about")}
                />
              </div>
            </div>

            <div className="flex justify-between items-center w-full">
              <button
                className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default AddPost;
