import { useEffect, useState } from "react";
import { Container, Content, RightArrowButton, LeftArrowButton } from "./styles";

import { Header } from '../../../Components/Header'
import { Section } from "../../../components/Section";
import { Footer } from "../../../Components/Footer";

import logoFRUTAS from "../../../assets/logoFRUTAS.svg";
import Um from "../../../assets/comida/1.png";
import Dois from "../../../assets/comida/2.png";
import Tres from "../../../assets/comida/3.png";
import Quatro from "../../../assets/comida/4.png";
import Cinco from "../../../assets/comida/5.png";
import Seis from "../../../assets/comida/6.png";
import Sete from "../../../assets/comida/1.png";
import Oito from "../../../assets/comida/2.png";


import Carousel from "react-elastic-carousel";
import Item from "../../../Components/Card/card";
import { Card } from "../../../Components/Card";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export function Home() {
  // Restante do código do componente...

  return (
    <Container>
      <Header />
      <Content >
        <div className="logo">
          <img src={logoFRUTAS} alt="" />
          <div className="paragrafo">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
        <Section title='Refeições' className="seta">
          <div className="seta"></div>
          <Carousel breakPoints={breakPoints} pagination={false} renderArrow={({ type, onClick }) => {
            const arrowIcon = type === 'NEXT' ? '❯' : '❮';
            return type === 'NEXT' ? (
              <RightArrowButton onClick={onClick}>{arrowIcon}</RightArrowButton>
            ) : (
              <LeftArrowButton onClick={onClick}>{arrowIcon}</LeftArrowButton>
            );

          }}>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
          </Carousel>
        </Section>
        <Section title='Sobremesas' className="seta">
          <div className="seta"></div>
          <Carousel breakPoints={breakPoints} pagination={false} renderArrow={({ type, onClick }) => {
            const arrowIcon = type === 'NEXT' ? '❯' : '❮';
            return type === 'NEXT' ? (
              <RightArrowButton onClick={onClick}>{arrowIcon}</RightArrowButton>
            ) : (
              <LeftArrowButton onClick={onClick}>{arrowIcon}</LeftArrowButton>
            );

          }}>
            {/* <Item>{dish.map((item, id) => <Card key={id} data={item} />)}</Item> */}
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
          </Carousel>
        </Section>
        <Section title='Bebidas' className="seta">
          <div className="seta"></div>
          <Carousel breakPoints={breakPoints} pagination={false} renderArrow={({ type, onClick }) => {
            const arrowIcon = type === 'NEXT' ? '❯' : '❮';
            return type === 'NEXT' ? (
              <RightArrowButton onClick={onClick}>{arrowIcon}</RightArrowButton>
            ) : (
              <LeftArrowButton onClick={onClick}>{arrowIcon}</LeftArrowButton>
            );

          }}>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
          </Carousel>
        </Section>

        {/* Restante do código... */}

      </Content>
      <Footer />
    </Container>
  )
}
