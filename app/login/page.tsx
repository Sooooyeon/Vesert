"use client"

import { useState } from "react";
import { useQuery } from 'react-query';

export default function Login() {
  const [userId, setUserId] = useState("");  
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch('https://openmarket.weniv.co.kr/accounts/login/');
    return res.json();
  };

  const { status, data, error } = useQuery('posts', login);

  console.log(status);
  console.log(data);
  console.log(error);

  const inputId = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUserId(e.target.value);
  console.log(e.target.value);
  }

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  }


  return (
  <div>
    <h1>Vesert</h1>
    <div>
      <label htmlFor="idInput">아이디</label>
      <input type="text" id="idInput" value={userId}/>
    </div>
    <div>
      <label htmlFor="passwordInput">비밀번호</label>
      <input type="password" id="passwordInput"/>
    </div>
  </div>
  );
}
