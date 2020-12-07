import React,{ useState } from "react";
import "./styles.css";
import logo from "../public/store.svg"

export default function App() {
 
   const [site1,setSite1] = useState("Flipkart(5/5)");
   const [site2,setSite2] = useState("Amazon(5/5)");

   const Clothes = () => {
      setSite1("Myntra(5/5)");
      setSite2("Shein(4.5/5)");
   }

   const Grocery = () => {
      setSite1("JioMart(5/5)");
      setSite2("BigBaazar(4.5/5)");
   }

   const Electronics = () => {
     setSite1("Flipkart(5/5)");
     setSite2("Amazon(4.5/5)");
   }

   const Food = () => {
    setSite1("Swiggy(5/5)");
    setSite2("Zomato(4/5)");
  }

  return (
    <div className="App">
      <h1><img src={logo} alt="shopping"/> Best shopping sites</h1>
      <p>Check out my favourite shopping sites. Select a genre to get started</p>
      <button onClick={Clothes}>Clothes</button>
      <button onClick={Grocery}>Grocery</button>
      <button onClick={Electronics}>Electronics</button>
      <button onClick={Food}>Food</button>
      <hr/>
      <div className="site1">
        <p>{site1}</p>
      </div>
      <div className="site2">
        <p>{site2}</p>
      </div>
    </div>
  );
}
