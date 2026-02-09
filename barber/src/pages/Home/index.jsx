import React from "react";
import { Container, Imagem } from "./style";

import corte from "../../assets/images/corte.png"

export const Home = () => {
    return (
        <>
        <Container>
            <Imagem src={corte} alt="Barber" />
        </Container>
        </>
    )
}

export default Home;