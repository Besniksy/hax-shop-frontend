import axiosInstance from "../../helpers/axios"
import { productConstants } from "./constants"

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axiosInstance.get(`/products/${slug}`)
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            })
        }
    }
}

export const getProductsByMainCategory = (cate) => {
    return async dispatch => {
        const res = await axiosInstance.get(`/productsbycategory/${cate}`)
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_MAIN_CATEGORY,
                payload: res.data
            })
        }
    }
}

export const getProductsByMainCategoryAndSearch = (cate, search) => {
    return async dispatch => {
        const res = await axiosInstance.get(`/productsbycategoryandsearch/${cate}?name=${search}`)
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_MAIN_CATEGORY_AND_SEARCH,
                payload: res.data
            })
        }
    }
}

export const getAllProducts = () => {
    return async dispatch => {
        const res = await axiosInstance.get(`/products`)
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_FROM_PRODUCTS,
                payload: res.data
            })
        }
    }
}

export const getCategoryProductBySearch = (slug, search) => {
    return async dispatch => {
        let res
        if(slug !== undefined){
            res = await axiosInstance.get(`/productssearch/${slug}?name=${search}`)
        }
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_CATEGORY_PRODUCTS_BY_SEARCH_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: productConstants.GET_CATEGORY_PRODUCTS_BY_SEARCH_FAILURE,
                payload: {error: res.data.error}
            })
        }
    }
}

export const getAllProductBySearch = (search) => {
    return async dispatch => {
        const res = await axiosInstance.get(`/allproducts?name=${search}`)
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_BY_SEARCH,
                payload: res.data
            })
        }
    }
}