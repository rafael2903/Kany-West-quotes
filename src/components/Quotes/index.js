import Axios from "axios";
import React, { useEffect, useState } from "react";
import Quote from "../Quote";
import {Ul} from './styles';


export default function Quotes( {quantity}) {

  const [quotes, setQuotes] = useState([]);

 
  useEffect(()=>{

    setQuotes([])
    for(let i=0; i < quantity; i++){
      Axios
        .get("https://api.kanye.rest/")
        .then(response => response.data)
        .then(data => {
          setQuotes(previos => [...previos,data] );
        })
    }
    
  },[quantity]);
  
  return(
    <>
      <Ul>
          {
            quotes.map( (quote, index) => {
              return <Quote key={index} >{quote.quote}</Quote>
            })
          }
      </Ul>
    </>
  );   
}



