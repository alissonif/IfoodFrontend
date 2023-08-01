import { Link } from 'react-router-dom'

import { Container } from "./styles";
import { ButtonText } from '../../../Components/ButtonText';
import { Tag } from '../../../Components/Tag';

import { Header } from "../../../Components/HeaderAdmin";
import { Footer } from "../../../Components/Footer";
import { Button } from "../../../Components/Button";
import { Textarea } from '../../../Components/Textarea';
import { IngredientItem } from '../../../Components/IngredientItem';

import { FiUpload } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import { PiCaretLeftBold } from 'react-icons/pi'
import Plus from '../../../assets/plus.svg';
import Deletar from '../../../assets/x.svg';


export function Edit() {
  return (
    <Container>
      <Header />
      <main>
        <>
          <div className="form">
            <ButtonText icon={PiCaretLeftBold} title='voltar' className="voltar" iconSize={32} to='/home' />
            <h2>Editar prato</h2>
            <form>
              <div className="divFormLine1 ">
                <div className="divForm1 ">
                  <h3 >Imagem do prato</h3>
                  <div className="up">
                    <label className="k"
                      htmlFor="name1" ><span><FiUpload size={24} /></span>  Selecione imagem
                      <input
                        type="file"
                        id="name1"
                        accept="image/*"
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="divForm2">
                  <label
                    htmlFor="name" > <h3>Nome</h3>
                  </label>
                  <input
                    type='text'
                    placeholder='Ex.: Salada Ceasar'
                    id='name'
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className=" divForm3">
                  <label htmlFor="frutas"><h3>Categoria</h3></label>
                  <select id="frutas" name="frutas">
                    <option value="Refeição">Refeição</option>
                    <option value="Sobremesa">Sobremesa</option>
                    <option value="Bebida">Bebida</option>
                  </select>
                </div>
              </div>
              <div className="divFormLine2">
                <div className="ingredients">
                  <label
                    htmlFor="name" > <h3>Ingredientes</h3>
                  </label>
                  <div className="tags2">
                    <div className="tags">
                      <IngredientItem value='Pão Naan' />
                      <IngredientItem isNew placeholder='Adicionar' /></div>
                  </div>
                </div>
                <div className=" divForm4">
                  <label htmlFor="price" >
                    <h3>Preço</h3>
                  </label>
                  <input
                    id="price"
                    title='Preço'
                    type='text'
                    placeholder="R$ 00,00"
                    name='price'
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="divFormLine3">
                <label
                  htmlFor="description" > <h3>Descrição</h3>
                </label>
                <Textarea placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' />
              </div>
              <div className="button">
                <Button
                  title='Excluir prato'
                  className="button3"
                  type="button"
                />
                <Button
                  title='Salvar alterações'
                  className="button2"
                  type="button"
                />
              </div>
            </form>
          </div>
        </ >
      </main>
      <Footer className='footer' />
    </Container>
  );
} 
