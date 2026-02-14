import React from "react";
import { Container, Imagem, Content, Title, Description, Price } from "./style";

import servico from "../../assets/images/servico.png"

export const ServicosContainer = () => {
    return (
        <>
            <Container>
                <Imagem>
                    <img src={servico} alt="" />
                </Imagem>
                <Content>
                    <Title>Corte</Title>
                    <Description>O corte de cabelo retira as pontas ressecadas do cabelo e ajuda no crescimento dos fios.</Description>
                    <Price>R$ 50,00</Price>
                </Content>
            </Container>
        </>
    )
}

export default ServicosContainer;