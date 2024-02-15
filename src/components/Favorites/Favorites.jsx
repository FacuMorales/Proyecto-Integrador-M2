import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from "./Favorites.module.css";

function Favorites (props) {
   const [aux, setAux] = useState(false);

    const myFavorites = useSelector((state)=> state.myFavorites);
    const dispatch = useDispatch();

    function handleOrder (e) {
      dispatch(orderCards(e.target.value));
      if(aux===false) setAux(true);
      else setAux(false);
    };

    function handleFilter (e) {
      dispatch(filterCards(e.target.value));
    };

    return(
        <div>
         <section className={style.selectContainer}>
            <select onChange={handleOrder} className={style.select}>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter} className={style.select}>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         </section>
      {
         myFavorites.map(pj=>{
            return(
                  <Card
                   id={pj.id}  
                   name={pj.name}
                   status={pj.status}
                   species={pj.species}
                   gender={pj.gender}
                   origin={pj.origin?.name}
                   image={pj.image}
                   onClose={props.onClose}
                  />
            )
         })
      }
   </div>
    );
};

export default Favorites;