import styled from "styled-components";

export const Goback = styled.div`
  margin: 24px 0 42px 0;
  /* Text */
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  >button{
      display: flex;
      flex-direction: row;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`
export const Content = styled.div`
/* display: flex; */
width: 1120px;
/* flex-direction: column; */
/* align-items: flex-end; */
/* gap: 32px; */
`

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 104px;
grid-template-areas: 'header' 'content' 'footer';
main{
  /* *{
    border: 1px solid blue;
  } */
margin: auto;
width: 1120px;
height: 650px;
background-color: #0D1D25;
.footer{
  background: red;
}
}
`;

export const Tag2 = styled.div`
/* display: flex; */
gap: 12px;
width: 118px;
height: 32px;
padding: 10px 16px;
flex-direction: column;
justify-content: center;
align-items: flex-start;

border-radius: 8px;
background: var(--light-light-600, #76797B);




color: var(--light-light-100, #FFF);

/* Roboto/Small regular */
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 16px */
`


