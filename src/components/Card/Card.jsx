import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav } from "../../redux/actions";
import { removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Card(props) {
   const [isFav, setIsFav] = useState(false);

   const myFavorites = useSelector((state) => state.myFavorites);

   const dispatch = useDispatch();

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(props.id));
      }else{
         setIsFav(true);
         dispatch(addFav(props));
      }
   };

   return (
      <div className={style.container}>
         <button onClick={() => {props.onClose(props.id); dispatch(removeFav(props.id));}} className={style.boton}>X</button>
         <div className={style.favorite}>
                  {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         </div>
         <img src={props.image} alt='' className={style.imagen}/>
         <Link to={`/detail/${props.id}`}>
            <h2 className={style.h2}>{props.name}</h2>
         </Link>
         <h2 className={style.h2}>{props.status}</h2>
         <h2 className={style.h2}>{props.species}</h2>
         <h2 className={style.h2}>{props.origin}</h2>
         <h2 className={style.h2}>{props.gender}</h2>
      </div>
   );
}
