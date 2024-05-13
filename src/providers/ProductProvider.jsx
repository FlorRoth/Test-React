import { useReducer } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductReducer } from "../reducers/ProductReducer";
import { types } from "../types/types";
import { axiosApi } from "../config/AxiosApi";

const initialValues = {
  products: [],
  categories: [],
  isLoading: true,
}

export const ProductProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ProductReducer, initialValues);

  const getProducts = async () => {

    try {

      const { data } = await axiosApi.get('/products')

      dispatch({
        type: types.product.getProducts,
        payload: {
          products: data,
          isLoading: false,
        }
      })

    } catch (error) {
      dispatch({
        type: types.product.getProducts,
        payload: {
          products: [],
          isLoading: false,
        }
      })
    }
  }

  const getProductsByCategory = async (category) => {
    try {

      const { data } = await axiosApi.get(`/products/category/${category}`)
     
      dispatch({
        type: types.product.getProducts,
        payload: {
          products: data,
          isLoading: false,
        }
      })

    } catch (error) {
      dispatch({
        type: types.product.getProducts,
        payload: {
          products: [],
          isLoading: false,
        }
      })
    }
  }
  const getCategories = async () => {

    try {
      const {data} = await axiosApi.get('/products/categories')
      dispatch({
        type: types.category.getCategories,
        payload: {
          categories: data,
          isLoading: false,
        }
      })
    } catch (error) {
      dispatch({
        type: types.category.getCategories,
        payload: {
          categories: [],
          isLoading: false,
        }
      })
    }
  }


  return (

    <ProductContext.Provider value={{
      state,
      getProducts,
      getCategories,
      getProductsByCategory
    }}>
      {children}
    </ProductContext.Provider>
  )
}