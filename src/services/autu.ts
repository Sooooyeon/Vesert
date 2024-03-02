import { AxiosError } from 'axios';
import { defaultInstance } from './instance';

// 회원가입
export const signUp = async (userData: object) => {
  try {
    const res = await defaultInstance.post(`/user`, userData);
    return res.data;
  } catch (error: AxiosError) {
    if (typeof error.response !== null) {
      const { status, data } = error.response;
      if (status === 422) {
        return `*${data.message}`;
      } else {
        console.log(data.message);
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
  } catch (error: AxiosError) {
    if (error.response) {
      const { status, data } = error.response;
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