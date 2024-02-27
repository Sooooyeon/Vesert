"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function Login() {

  const router = useRouter();

  const [userId, setUserId] = useState("");  
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState('buyer');

  const loginData = {
    "username": userId,
		"password": password,
		"login_type": userType
  }

  const login = async (loginData: object) => {
  const { data } = await axios.post('https://openmarket.weniv.co.kr/accounts/login/', loginData);
  console.log(data);
  localStorage.setItem("token", data.token);
  console.log(localStorage);
  if(data.token){
    router.push("/home")
  }
  return data;
}


  const inputId = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUserId(e.target.value);
  console.log(e.target.value);
  }

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    login(loginData)
  }


  return (
  <div>
    <h1>Vesert</h1>
    <form onSubmit={handleSubmitLogin}>
      <div>
        <button type="button" onClick={() => setUserType('BUYER')} style={{ backgroundColor: userType === 'BUYER' ? 'skyblue' : 'white' }}>구매회원</button>
        <button type="button" onClick={() => setUserType('SELLER')} style={{ backgroundColor: userType === 'SELLER' ? 'skyblue' : 'white' }}>판매회원</button>
      </div>
      <input type="text" placeholder='아이디' onChange={inputId} value={userId}/>
      <input type="password" placeholder='비밀번호' onChange={inputPassword} id="passwordInput"/>
      <button>로그인</button>
      <Link href={'/join'}><button type='button'>회원가입</button></Link>
    </form>
  </div>
  );
}
