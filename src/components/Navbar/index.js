import React from "react";
import {Header, Nav, Ul, Li, StyledLink} from './styles';

export default function Navbar() {
  
    return (
    <Header>
      <Nav>
        <Ul>
          <Li><StyledLink className='title' to="/" >"Kanye West quotes"</StyledLink></Li>
        </Ul>
      </Nav>
    </Header>
    );
}