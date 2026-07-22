import type { NavigateFunction } from "react-router-dom";
import { api } from "./apiUtils/apiUtils";
import { messages } from "./constant";

/**
 * 로컬스토리지 UserId 저장
 * @returns userId
 */
export function getStorageUserId(){
    return localStorage.getItem("@cafe_log_user_id");
}

/**
 * 로컬 스토리지 UserId 조회
 * @param userId 
 */
export function setStorageUserId(user_id : string){
    localStorage.setItem("@cafe_log_user_id", user_id);
}

/**
 * 사용자 ID Check 
 * @param navigate
 * @param curPage
 * @param movePage
 * @returns {
 *      msg : string,
 *      code : string
 * }
 */
export async function checkUser(){

    const user_id = getStorageUserId();
            
    if (!user_id) {
        return {data : { code : -1, msg : messages.LOGIN_MSG }};
    }

    try {
        const res = await api.getCallApi("/users/checkUser", { user_id : String(user_id) });
        
        if( res.data.code !== 0 )
            return {data : res.data};

        return {data : res.data};

    } catch (error) {
        console.error(error);
        return {data : { code: -1, msg : error }};
    }
}

/**
 * 화면 이동 movePage
 * @param navigate
 * @param movePage
 * @returns {
 *      msg : string,
 *      code : string
 * }
 */
export async function movePage(navigate : NavigateFunction, movePage : string){

    const res = await checkUser();

    if(res.data.code < 0){
        if(movePage === "/login"){
            goLogin(navigate);
            return;
        }

        alert(res.data.msg);
        navigate("/");
    }

    if(movePage === "/login"){
        navigate("/main");
        return
    }

    navigate(movePage);
}

/**
 * 로그인 페이지로 이동
 * @param navigate 
 */
export function goLogin(navigate: NavigateFunction){
    navigate("/login");
}
/**
 * 로그아웃
 * @param navigate 
 */
export async function logout(navigate : NavigateFunction){
    localStorage.removeItem("@cafe_log_user_id");
    alert(messages.LOGOUT_MSG);
    navigate("/");
}