import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginAPI } from "@/services/auth";

const useLogin = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");  
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState('BUYER');

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
        router.push("/error");
    }
  };

  return {
    userId,
    setUserId,
    password,
    setPassword,
    userType,
    setUserType,
    login
  };
};

export default useLogin;
