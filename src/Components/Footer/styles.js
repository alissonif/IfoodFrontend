import styled from "styled-components";

export const Container = styled.footer`
margin-top: 155.44px;
display: flex;
width: 100%;
height: 77px;
padding: 24px 123px;
align-items: center;
justify-content: space-between;
gap: 8px;
background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

/* text */
div{
  display: flex;
  h1{
  margin-left:11.23px ;
  color:  ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
  /* svg{
    width: 29.205px;
    height: 29.205px;
    flex-shrink: 0;
  } */
}

>span{
  color:  ${({ theme }) => theme.COLORS.WHITE2};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
`