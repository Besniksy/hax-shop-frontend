import { 
    initialDataConstants, 
    categoryConstansts, 
    productConstants, 
    brandConstants
} from "./constants";
import axiosInstance from "../../helpers/axios";

export const getInitialData = () => {
    return async dispatch => {
        
        const res = await axiosInstance.post(`/initialData`);
        if(res.status === 200){
            const { products } = res.data;
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { products }
            });

        }
        console.log(res)
    }
}