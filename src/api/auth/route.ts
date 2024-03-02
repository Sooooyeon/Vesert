import { defaultInstance } from '../../services/instance';
import { signUpBuyerAPI } from '@API/auth';
import { AxiosError } from 'axios';

// 구매자 회원가입
export const signUp = async (userData: object) => {
  try {
    const res = await signUpBuyerAPI(userData);
    return res.data;
  } catch (error) {
    if ((error as AxiosError).isAxiosError) {
      const axiosError = error as AxiosError;
      let status, data;
      if (axiosError.response) {
        ({ status, data } = axiosError.response);
      }
      if (status === 422) {
        // return `*${data.message}`;
      } else {
        // console.log(data.message);
        return null;
      }
    }
  }
};

// 로그인
export const login = async (userData: object) => {
  try {
    const res = await defaultInstance.post(`/user/login`, userData);
    return [res.data, null];
  } catch (error) {
    if ((error as AxiosError).isAxiosError) {
      const axiosError = error as AxiosError;
      let status, data;
      if (axiosError.response) {
        ({ status, data } = axiosError.response);
      }
      if (status === 422) {
        return [null, data];
      } else {
        console.log(data);
        return null;
      }
    }
  }
};


// 로그아웃