import styled from '@emotion/styled';

export const Button = styled.button`
margin: 0;
padding: 0;
font-family: inherit;
background-color: transparent;
cursor: pointer;
box-shadow: none;
border: none;
width:150px;
height:150px;
background-image:${({url})=>`url(${url})`};
background-size:contain;
`