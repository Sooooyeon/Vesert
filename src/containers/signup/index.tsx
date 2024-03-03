"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export default function Signup() {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");

  const join = async (joinData: object)=>{
    const reqUrl = "https://openmarket.weniv.co.kr/accounts/signup/";
    const res = await fetch(reqUrl,{
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify(joinData)
    });
    const json = await res.json();
    console.log(res.status);
    console.log(json);
    if(res.status === 201){
      router.push("/")
    }
  }

  const inputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
    console.log(e.target.value);
  }

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPw(e.target.value);
    console.log(e.target.value);

  }

  const inputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    console.log(e.target.value);

  }
  
  const inputPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPhoneNum(e.target.value);
    console.log(e.target.value);

  }

  const submitJoin = ()=>{
    const joinData = {
      "username": userId,
      "password": password,
      "password2": confirmPw,
      "phone_number": userPhoneNum, 
      "name": userName,
    }
    join(joinData);
    }

  return (
  <div>
    <h2>회원가입</h2>
    <div>
      <label htmlFor="idInput">아이디</label>
      <input type="text" id="idInput" value={userId} onChange={inputId}/>
      <button>중복확인</button>
    </div>
    <div>
      <label htmlFor="passwordInput">비밀번호</label>
      <input type="password" id="passwordInput" value={password} onChange={inputPassword}/>
    </div>
    <div>
      <label htmlFor="pwconfirmInput">비밀번호  재확인</label>
      <input type="password" id="pwconfirmInput" value={confirmPw} onChange={checkPassword}/>
    </div>
    <div>
      <label htmlFor="userNameInput">이름</label>
      <input type="text" id="userNameInput" value={userName} onChange={inputUserName}/>
    </div>
    <div>
      <label htmlFor="phoneNumberInput">휴대폰번호</label>
      <input type="text" id="phoneNumberInput" value={userPhoneNum} onChange={inputPhoneNumber}/>
    </div>
    <button onClick={submitJoin}>가입하기</button>
  </div>
  );
}

