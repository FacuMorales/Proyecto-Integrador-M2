import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
   const [id,setId] = useState("");
   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div>
         <input type='text' onChange={handleChange} className={style.input}/>
         <button onClick={()=>{props.onSearch(id)}} className={style.boton}>Agregar</button>
      </div>
   );
}
