import styled from 'styled-components'
export const Container = styled.div`
height: 824px;
width: 100%;
display: flex;
/* *{
    border: solid 1px #fff;
  }; */
  >img{
  font-size: 47px;
}
div{
  
  margin:341px auto 435px;
  display: flex;

  color: var(--light-light-100, #FFF);

  /* Roboto/Giant bold */
  font-family: Roboto;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  >h1{
    width: max-content;
  margin-left: 19px;

  }
  /* align-items: center; */
}

`

export const Form = styled.form`

margin: auto 108px;
  /* width: 476px;
  height: 540px; */

  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  text-align: center;
  
  border-radius: 16px;
  background: var(--dark-dark-700, #001119);
  >h2{
    display: flex;
    height: 68.762px;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    }
    >input{
      border: none;
      /* border: 1px solid #7C7C8A; */
      display: flex;
      width: 348px;
      height: 48px;
      padding: 12px 14px;
      justify-content: center;
      align-items: center;
      gap: 14px;

      border-radius: 8px;
      background: var(--dark-dark-900, #0D1D25);
      /* border: 1px solid var(--light-light-100, #FFF); */

      color: var(--light-light-500, #7C7C8A);

      /* Roboto/Small regular */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */

}
    >button{
            width: 100%;
            display: flex;
            padding: 12px 32px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            align-self: stretch;
}
.btText{
  color: var(--light-light-100, #FFF);
  text-align: center;

  /* Poppins/100-medium */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
}
.btText2{
  color: var(--light-light-100, #FFF);
  font-size: 11px;
}
  >label{
    align-self: flex-start;
    color: var(--light-light-400, #C4C4CC);

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    margin-bottom: -24px;
  }
`
