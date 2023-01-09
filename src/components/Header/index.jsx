import React from "react";

import { Container, Content, LogoTop, Menu, Navbar } from "./styles";
import logo from './../../assets/logo-white.png';

export const Header = () => {
    return(
        <Container>
            <Content>
                <LogoTop>
                    <img src={logo} alt="" />
                </LogoTop>
                <Navbar>
                    <Menu to="/">Home</Menu>
                    <Menu to="/games">Games</Menu>
                    <Menu to="/about">About</Menu>
                </Navbar>

            </Content>
            
        </Container>
    )
}