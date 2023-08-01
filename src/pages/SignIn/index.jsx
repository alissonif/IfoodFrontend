import { Container, Form } from './styles'
import Poligono from '../../assets/poligono.svg'
import { ButtonText } from '../../Components/ButtonText'
import { Button } from '../../Components/Button'
import { Link } from 'react-router-dom'

export function SignIn() {

  return (
    <Container>
      <div >
        <img className='up' src={Poligono} alt="logo" />
        <h1>
          food explorer
        </h1>
      </div>
      <Form className="login">
        <h2>Faça login</h2>

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

        {/* <ButtonText title='Criar uma conta' className='btText' /> */}
        <Link to='/register' className='btText2' >
          <h1>
            Criar uma conta
          </h1>
        </Link>
      </Form>
    </Container>
  )

}


