import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import {
  categoryReducer,
  allProductReducer,
  cartedProductReducer,
  itemByCategoryReducer,
  activeCategoryReducer,
  selectedProductReducer,
} from "./product.reducer";

const allReducers = combineReducers({
  userData: authReducer,
  categories: categoryReducer,
  itemsByCategory: itemByCategoryReducer,
  activeCategory: activeCategoryReducer,
  selectedProduct: selectedProductReducer,
  cartedProduct: cartedProductReducer,
  allItems: allProductReducer,
});

export default allReducers;
