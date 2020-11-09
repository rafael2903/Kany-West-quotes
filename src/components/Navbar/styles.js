import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Header = styled.header`
  width:100%;
  background-color: black;
`; 

export const Nav = styled.nav`
  width:100%;
  height: 100%;
`;

export const Ul = styled.ul`
  list-style: none;
  width:100%;
  height: 100%;
  padding: 0;
  margin:0;
  padding: 20px 35px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Li = styled.li`
  

`;

export const StyledLink = styled(Link)`

  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  font-family: 'Playfair Display', serif;
  text-decoration: none;
  font-size: 24px;
  color: white;

  	&.exit {
      font-size:15px;
    }

    &.exit:hover {
      text-decoration: underline;
    }

    &.title {
      position: relative;
      border-left: 2px solid white;
      padding-left: 3px;
    }
`;
