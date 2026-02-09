import React from 'react';
import { Container, Content, Menu, Buttons, Agendar, Login, Text } from './style';

import { CgMenuLeftAlt } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

export const Header = () => {
  return (
    <>
      <Container>
        <Content>
          <Menu>
            <CgMenuLeftAlt size={30} color="#0F0F0F" />
          </Menu>
          <Buttons>
            <Agendar><Text>Agendar</Text> <GoArrowUpRight size={20} color="#0F0F0F" /></Agendar>
            <Login><FiUser size={30} color="#0F0F0F" /></Login>
          </Buttons>
        </Content>
      </Container>
    </>
  );
};

export default Header;

