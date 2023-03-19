import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import thunk from "redux-thunk";

const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
