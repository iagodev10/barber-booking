import React from "react";
import {
    Container,
    Imagem,
    Texto,
    Main,
    Sub,
    Button,
    Servicos
} from "./style";

import corte from "../../assets/images/corte.png";
import ServicosContainer from "../../components/ServicosContainer";

export const Home = () => {
    return (
        <>
            <Container>
                <Imagem src={corte} alt="Barber" />
                <Texto>
                    <Main>Estilo. Precisão. Atitude.</Main>
                    <Sub>Agende seu corte com profissionais de verdade.</Sub>
                    <Button>Agendar agora</Button>
                </Texto>
            </Container>

            <Servicos>
                <ServicosContainer />
            </Servicos>
        </>
    );
};

export default Home;