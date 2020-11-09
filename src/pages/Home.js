import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Quotes from "../components/Quotes";

export default function Home( {setLogin}) {

  const [quantity, setQuantity] = useState(10);
  
  const handleChange = (event) => {
    setQuantity(event.target.value)
  }
  
  return(

    <div className="home">
      <Navbar />
      <div className="container">
          <label for="quantity">Quantidade: </label>
          <input onChange={handleChange} type="number" name="quantity" value={quantity}/>
          <Quotes quantity={quantity} />
      </div>
    </div>
  );   
}



