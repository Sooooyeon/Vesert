import { defaultInstance } from './instance';


// 구매자 회원가입
export const signUpBuyerAPI = (userData: object) => defaultInstance.post(`/accounts/signup/`, userData);


// 판매자 회원가입
export const signUpSellerAPI = (userData: object) => defaultInstance.post(`/accounts/signup_seller/`, userData);


// 로그인
export const loginAPI = (userData: object) => defaultInstance.post(`/accounts/login/`, userData);


// 로그아웃
export const logoutAPI = () => defaultInstance.post(`/accounts/logout/`);