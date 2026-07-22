import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "/api"
});

export const api = {
    getCallApi,
    postCallApi,
} 

/**
 * @author 남은주
 * @since 26.07.05
 * @description get 데이터 요청 API

 * @param uri
 * @param data
 * @returns res
 */
export async function getCallApi( uri = "", data = {} ){
    const res = await axiosAPI.get( uri, { params : data } );
    return res;
} 

/**
 * @author 남은주
 * @since 26.07.05
 * @description post 데이터 요청 API

 * @param uri
 * @param data
 * @returns res
 */
export async function postCallApi( uri = "", data = {} ){
    const res = await axiosAPI.post( uri, data );
    return res;
}

/**
 * @author 남은주
 * @since 26.07.18
 * @description post file 데이터 요청 API
 * 
 * @param uri 
 * @param data 
 * @returns 
 */
export async function postFileApi( uri = "", data : FormData){
    const res = await axiosAPI.post( uri, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    } );
    return res;
}

