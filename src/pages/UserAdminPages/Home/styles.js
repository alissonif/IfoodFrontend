import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Header = styled.header`
  /* Restante do CSS... */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* Adicionar outros estilos desejados para o header fixo */
  color: white;
  >svg{
  color: white;
  background-color: white;

}

`;

export const Content = styled.div`

position: relative;
/* display: flex; */
width: 100%;
margin: auto;
.logo{
  width: 1120px;
  /* width: 1244px; */
  margin: 164px auto 62px;
  height: 260px;
  border-radius: 8px;
  background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
  
  gap: 20px;
  justify-content: center;
  display: flex;
  >img{
    width: 632px;
    height:406px;
    opacity: 0.800000011920929;
    margin-top: -146px;
    margin-left: -100px;
  }
  
.paragrafo{

text-align: center;

  

  padding: 88px 100px 92px 0;
  > h2{
  color: var(--light-light-300, #E1E1E6);

  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 56px */
}
  > p{
  color: var(--light-light-300, #E1E1E6);

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  }
}
  
}

`
export const RightArrowButton = styled.button`
  /* filter: blur(4px); */

  /* Adicionar sombras e posicionar sobre os cards ao lado */
  height: 462px;
  width: 185px;
  position: relative; /* Mudar para relative */
  right: 100px; /* Ajustar o valor do right para posicionar sobre os cards ao lado */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1); */
  background-color: rgba(0, 0, 0, 0.7); /* Cor de fundo (se desejar) */
  color: white; /* Mudar a cor das setas para branco */
  /* transition: box-shadow 0.3s ease; */
  z-index: 2; /* Aumentar o z-index para colocar as setas acima dos cards */

  /* Adicionar sombreamento ao botão ao passar o mouse */
/* filter: opacity(0.6); */
  border: none;
  font-size:30px;
`;

export const LeftArrowButton = styled.button`
  /* filter: blur(4px); */

  /* Adicionar sombras e posicionar sobre os cards ao lado */
  height: 462px;
  width: 185px;
  position: relative; /* Mudar para relative */
  left: 100px; /* Ajustar o valor do left para posicionar sobre os cards ao lado */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1); */
  background-color: rgba(0, 0, 0, 0.7); /* Cor de fundo (se desejar) */
  color: white; /* Mudar a cor das setas para branco */
  transition: box-shadow 0.3s ease;
  z-index: 2; /* Aumentar o z-index para colocar as setas acima dos cards */

  /* Adicionar sombreamento ao botão ao passar o mouse */
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  border: none;
  font-size:30px;
`;

