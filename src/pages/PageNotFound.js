import React from "react";
import {Link} from 'react-router-dom';

export default  function PageNotFound() {

  return(
    <>
    <h1>Página não encontrada!</h1>
    <Link to="/">Ir para a home</Link>
    </>
  );   
}

