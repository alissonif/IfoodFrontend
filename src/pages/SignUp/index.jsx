import { Container, Form } from './styles'
import Poligono from '../../assets/poligono.svg'
import { ButtonText } from '../../Components/ButtonText'
import { Button } from '../../Components/Button'
import { Link } from 'react-router-dom'


export function SignUp() {

  return (
    <Container>
      <div >
        <img className='up' src={Poligono} alt="logo" />
        <h1>
          food explorer
        </h1>
      </div>
      <Form className="login">
        <h2>Crie sua conta</h2>
        <label htmlFor="name">
          Seu nome
        </label>
        <input
          type="text"
          id='name'
          placeholder='Exemplo: Maria da Silva' />

        <label htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id='email'
          placeholder='Exemplo: exemplo@exemplo.com.br' />
        <label className="labels" htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          id='password'
          placeholder='No mínimo 6 caracteres' />

        <Button title='Entrar' />

        {/* <ButtonText title='Já tenho uma conta' className='btText' /> */}
        <Link to='/' className='btText2' >
          <h1>
            Já tenho uma conta
          </h1>
        </Link>
      </Form>
    </Container>
  )

}


