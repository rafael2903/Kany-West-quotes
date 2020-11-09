import React from "react";
import {Li} from './styles'

export default function Quote( {children}) {

  
  return(
    <>
      <Li>"{children}"</Li>
    </>
  );   
}
