import { useRouter } from 'next/navigation';
import { signUpBuyerAPI } from '@/services/auth';
import { useState } from 'react';

const useSignup = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");

  const signup = async () => {

    const joinData = {
      "username": userId,
      "password": password,
      "password2": confirmPw,
      "phone_number": userPhoneNum, 
      "name": userName,
    }

    try {
      const { data } = await signUpBuyerAPI(joinData);
      console.log(data);
      if(data){
        router.push("/");
      }
    } catch (error) {
        router.push("/error");
    }
  };

  return {
    userId,
    setUserId,
    password,
    setPassword,
    confirmPw,
    setConfirmPw,
    userName,
    setUserName,
    userPhoneNum,
    setUserPhoneNum,
    signup
  };
};

export default useSignup;
