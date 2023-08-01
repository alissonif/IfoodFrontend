import { Container, Goback, Content, Tag2 } from "./styles";
import Back from '../../../assets/back.svg';
import SetaUploadImage from '../../../assets/setaUploadImage.svg';
import { ButtonText } from '../../../Components/ButtonText';
import { Tag } from '../../../Components/Tag';

import { Header } from "../../../Components/HeaderAdmin";
// import { Section } from "../../../components/Section";
import { Footer } from "../../../Components/Footer";
import { Button } from "../../../Components/Button";
import { Input } from "../../../Components/Input";
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti'
import { FiUpload } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import { PiCaretLeftBold } from 'react-icons/pi'
import Plus from '../../../assets/plus.svg';
import Deletar from '../../../assets/x.svg';
// import { Textarea } from "../../../Components/Textarea";
import { Textarea } from '../../../Components/Textarea';
import { IngredientItem } from '../../../Components/IngredientItem';


export function New() {
  return (
    <Container>
      <Header />

      <main>

        {/* <Goback>
          <button >
            <img src={Back} alt="Back" />
            <ButtonText title='voltar' onClick='{handleBack}' />
          </button>
        </Goback> */}

        {/* <Content>
          <div>
            <h1>Adicionar prato</h1>
            <p>Imagem do prato</p></div>
          <div>

            <Section title='Imagem do prato' >
              <button >
                <img src={SetaUploadImage} alt="Back" />
                <ButtonText title='Selecione imagem' onClick='{handleBack}' />
              </button>
              <Input type="text" placeholder="Ex.: Salada Ceasar" />
              <Input type="text" placeholder="Refeição" />
            </Section>

            <Section title='Ingredientes' >
              <Input type="text" />
              <Input type="text" placeholder="R$ 00,00" />
            </Section>

            <Section title='Descrição' >
              <textarea name="" id="" cols="30" rows="10" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
            </Section>
          </div>
        </Content> */}


        <Content>


          <div className="form">


            <ButtonText icon={PiCaretLeftBold} title='voltar' className="voltar" iconSize={32} />



            <h2>Adicionar prato</h2>
            <form>

              <div className="divFormLine1 ">
                <div className="divForm1 ">
                  <h3 ><>Imagem do prato</></h3>
                  <div className="up">
                    <label className="k"
                      htmlFor="name1" ><span><FiUpload size={24} /></span>  Selecione imagem

                      <input
                        type="file"
                        id="name1"

                        // accept="image/png, image/jpeg" 
                        // onChange={handleImg}
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
                    // title='Nome'
                    type='text'
                    placeholder='Ex.: Salada Ceasar'
                    id='name'
                    // onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                {/* <div className=" divForm3">
                  <label htmlFor="food_type">Categoria</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    {
                      options.map((option, index) => (
                        <option value={option} key={String(index)}>
                          {option}
                        </option>
                      ))
                    }
                  </select>
                </div> */}

                <div className=" divForm3">
                  <label htmlFor="frutas"><h3>Categoria</h3></label>
                  <select id="frutas" name="frutas">
                    <option value="Refeição">Refeição</option>
                    <option value="Sobremesa">Sobremesa</option>
                    <option value="Bebida">Bebida</option>
                  </select>

                </div>

              </div>

              <div className="">
                <div className="">
                  <label
                    htmlFor="name" > <h3>Ingredientes</h3>
                  </label>
                  <div className="tags">
                    <IngredientItem value='Pão Naan' />
                    <IngredientItem isNew placeholder='Adicionar' /></div>



                  {/* <div className="ingredients2">
                    <Tag title='Pão Naan' icon={TiDeleteOutline} />
                    <Tag title='Adicionar' icon={AiOutlinePlus} className='tag' />
                  </div> */}


                  {/* className="divForm4" */}
                  {/* <h3>Ingredientes</h3> */}
                  {/* <div className="tags">
                    {
                      ingredients.map((item, index) => (
                        <Tag
                          key={String(index)}
                          value={item}
                          click={() => handleRemoveIngredient(item)}
                        />
                      ))
                    }

                    <Tag
                      isNew
                      placeholder='Ingredientes'
                      onChange={(e) => setNewIngredient(e.target.value)}
                      value={newIngredient}
                      click={handleAddIngredient}

                    />
                  </div> */}

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
                {/* <div className=" textarea">
                  <textarea
                    name="description" id="description"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div> */}
              </div>

              <div className="button">
                <Button
                  title='Salvar alterações'
                  className="button2"
                  type="button"
                // onClick={handleCreate}

                />
              </div>



            </form>
          </div>


        </Content>


      </main>
      <Footer className='footer' />
    </Container>
  );
}  