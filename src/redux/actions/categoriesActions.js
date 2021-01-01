import axiosInstance from "../../helpers/axios"
import { categoryConstants } from "./constants"

export const getAllCategories = () => {
    return async dispatch => {
        const res = await axiosInstance.get('/category/getcategories')
        console.log(res)

        dispatch({type: categoryConstants.GET_CATEGORIES_REQUEST})
        if(res.status === 200){
            const { categoryList } = res.data
            dispatch({
                type: categoryConstants.GET_CATEGORIES_SUCCESS,
                payload: {categories: categoryList}
            })
        }else{
            dispatch({
                type: categoryConstants.GET_CATEGORIES_FAILURE,
                payload: {error: res.data.error}
            })
        }
    }
}
