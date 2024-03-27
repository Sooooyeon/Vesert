import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginAPI } from "@/services/auth";

const useLogin = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");  
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState('BUYER');
  const [loginFailMessage, setLoginFailMessage] = useState('');

  const login = async () => {
    const loginData = {
      "username": userId,
      "password": password,
      "login_type": userType
    };

    try {
      const { data } = await loginAPI(loginData);
      console.log(data);
      localStorage.setItem("token", data.token);
      if(data.token){
        router.push("/home");
      }
      return data;
    } catch (error) {
      if (error instanceof Error) {
        const axiosError = error as any;
        if (axiosError.response) {
          const failMessage = axiosError.response.data.FAIL_Message;
          if(failMessage !== "" && failMessage == '로그인 정보가 없습니다.'){
            setLoginFailMessage("아이디 또는 비밀번호가 일치하지 않습니다.")
          }
          if(failMessage !== "" && failMessage == '로그인 정보가 없습니다. 로그인 유형을 학인해주세요.'){
            setLoginFailMessage("회원 유형이 올바르지 않습니다.")
          }
        }
        return loginFailMessage;
      }
      return null;
    }
  };

  return {
    userId,
    setUserId,
    password,
    setPassword,
    userType,
    setUserType,
    loginFailMessage,
    login
  };
};

export default useLogin;
