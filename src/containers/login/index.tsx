"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { loginAPI } from "@/services/auth";
import logo from "../../../public/images/vesert-logo.png"
import Link from 'next/link';
import Image from 'next/image';
import { Container } from "@/styles/Container";
import styled from "styled-components";


export default function Login() {

  const router = useRouter();
  const [userId, setUserId] = useState("");  
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState('BUYER');

  const loginData = {
    "username": userId,
		"password": password,
		"login_type": userType
  }

  const login = async (loginData: object) => {
  const { data } = await loginAPI(loginData);
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
  <Container>
    <LoginCont>
      <H1><Image src={logo} alt="Vesert" className="img"/></H1>
      <LoginBox>
        <Tabs>
          <Tab selected={userType === 'BUYER'} onClick={() => setUserType('BUYER')}>구매회원</Tab>
          <Tab selected={userType === 'SELLER'} onClick={() => setUserType('SELLER')}>판매회원</Tab>
        </Tabs>
        <LogintForm onSubmit={handleSubmitLogin}>
            <Input type="text" placeholder='아이디' onChange={inputId} value={userId}/>
            <Input type="password" placeholder='비밀번호' onChange={inputPassword} id="passwordInput"/>
          <LoginBtn>
            <button className="button">로그인</button>
          </LoginBtn>
        </LogintForm>
      </LoginBox>
      <Btns>
        <Link href={'/signup'}><button type='button' className="button">회원가입</button></Link>
        <button type='button'>비밀번호 찾기</button>
      </Btns>
    </LoginCont>
  </Container>
  );
}

const LoginCont = styled.div`
  /* max-width: 550px; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
`

const H1 = styled.h1`
  margin-top: 13rem;
  .img{
    width: 19.6rem;
    height: 9.8rem;
  }
`
const LoginBox = styled.div`
  width: 80%;
  max-width: 400px;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
`

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 16px;
`

const Tab = styled.div<{ selected: boolean }>`
  font-size: 1.5rem;
  width: 100%;
  padding: 20px 16px;
  &:first-child{
    border-right: 1px solid #C4C4C4;
    border-top-left-radius: 10px;
  }
  &:last-child{
    border-top-right-radius: 10px;
  }
  cursor: pointer;
  color: ${props => props.selected ? '#77492C' : 'black'};
  background-color: ${props => props.selected ? '#white' : '#eeeeee'};
  border-bottom: ${props => props.selected ? 'none' : '1px solid #C4C4C4'};
  font-weight: ${props => props.selected ? '500' : '300'};
`

const LogintForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.5rem;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  
  margin-bottom: 2rem;
  border-bottom: 1px solid #C4C4C4;
  &:focus{
    outline: none;
    border-bottom: 1px solid #c2530e;
  }
`

const LoginBtn = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 1.2rem;
  text-align: center;
  border-radius: 10px;
  background-color: #77492C;
  cursor: pointer;
  .button{
    color: white;
  }
`

const Btns = styled.div`
  margin-top: 20px;
  color: #767676;
  .button{
    padding-right: 12px;
    margin-right: 12px;
    border-right: 1px solid #c4c4c4;
  }
`