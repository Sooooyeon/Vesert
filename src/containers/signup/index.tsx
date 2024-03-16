"use client"

import useSignup from "@/hooks/useSignup";
import styled from 'styled-components';

export default function Signup() {

const { 
  setUserId,
  setPassword,
  setConfirmPw,
  setUserName,
  setUserPhoneNum,
  signup 
} = useSignup();


const handleSingup = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    await signup();
  }

  return (
  <div>
    <h2>회원가입</h2>
    <form onSubmit={handleSingup}>
      <div>
        <label htmlFor="idInput">아이디</label>
        <input type="text" 
          onChange={(e)=>setUserId(e.target.value)}/>
        <button>중복확인</button>
      </div>
      <div>
        <label htmlFor="passwordInput">비밀번호</label>
        <input type="password" 
          onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="pwconfirmInput">비밀번호  재확인</label>
        <input type="password" 
          onChange={(e)=>setConfirmPw(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="userNameInput">이름</label>
        <input type="text" 
          onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="phoneNumberInput">휴대폰번호</label>
        <input type="text" 
          onChange={(e)=>setUserPhoneNum(e.target.value)}/>
      </div>
      <button type="submit">가입하기</button>
    </form>
  </div>
  );
}

