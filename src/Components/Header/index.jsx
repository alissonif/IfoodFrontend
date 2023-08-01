import { Container } from "./styles";
import Poligono from '../../assets/poligono.svg'
import Search from '../../assets/search.svg'
import Logout from '../../assets/logout.svg'
import Pedido from '../../assets/pedido.svg'

import { RiSearchLine, } from "react-icons/ri";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiSignOut } from "react-icons/pi";

import { Input } from "../Input";
import { Button } from '../Button/index';
// import { Input } from "../Input";
// import { ButtonText } from "../ButtonText";
// import { useNavigate } from 'react-router-dom'; 

export function Header() {
  return (
    <Container >
      <div className="left">
        <img src={Poligono} alt="logo" />
        <h1>
          food explorer
        </h1>
      </div>
      <Input className='input' icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
      <div className="right">
        <Button icon={Pedido} title='Pedidos (0)' />
        {/* <img src={Logout} alt="logo" /> */}
        <div className="sair" onClick="">
          <FiLogOut />
        </div>
      </div>
    </Container>
  );
}

