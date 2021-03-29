export const storeCategories = (categories) => {
  localStorage.setItem("categories", JSON.stringify(categories));

  return {
    type: "STORE_CATEGORIES",
    payload: categories,
  };
};

export const storeItemsByCategory = (items) => {
  localStorage.setItem("itemsByCategory", JSON.stringify(items));

  return {
    type: "STORE_ITEMS_BY_CATEGORY",
    payload: items,
  };
};

export const storeActiveCategory = (category) => {
  localStorage.setItem("activeCategory", JSON.stringify(category));

  return {
    type: "STORE_ACTIVE_CATEGORY",
    payload: category,
  };
};

export const storeSelectedProduct = (product) => {
  localStorage.setItem("selectedProduct", JSON.stringify(product));

  return {
    type: "STORE_SELECTED_PRODUCT",
    payload: product,
  };
};

export const storeCartedProduct = (product) => {
  return {
    type: "STORE_CARTED_PRODUCT",
    payload: product,
  };
};

export const storeAllProducts = (products) => {
  localStorage.setItem("allProducts", JSON.stringify(products));

  return {
    type: "STORE_ALL_PRODUCTS",
    payload: products,
  };
};

export const clearCartProduct = () => {
  return {
    type: "CLEAR_CART_PRODUCTS",
  };
};
