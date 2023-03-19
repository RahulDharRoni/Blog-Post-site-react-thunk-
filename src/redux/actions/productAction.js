import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  LOAD_PRODUCT,
  REMOVE_PRODUCT,
} from "../actionTypes/actionTypes";

export const loadProductui = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};

export const addProduct = (deta) => {
  return {
    type: ADD_PRODUCT,
    payload: deta,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};
export const editProduct = (id) => {
  return {
    type: EDIT_PRODUCT,
    payload: id,
  };
};
