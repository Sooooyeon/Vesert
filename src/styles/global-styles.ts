"use client"

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";


// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
  }

  html{ 
	font-size: 62.5%;

	@media (min-width: 768px) {
    /* font-size: 70%; */
  }
	@media (min-width: 1200px) {
    /* font-size: 75%; */
  }
	
}

  * {
    box-sizing: border-box;
  }
  a{
	text-decoration:none;
	color:inherit;
	cursor:pointer;
}
input,button{
	border:none;
	background-color:inherit;
}
button{
	cursor:pointer;
	font: inherit;
	padding: 0;
	border: none;
	background: transparent;
}
li{
	list-style: none;
}
p{
	color: #000;
}
Link{
	color: inherit;
	&:visited{
		color: inherit;
	}
}
.a11y-hidden {
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
}
`;

export default GlobalStyle;