import style from "./Detail.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detail (){
    const [character, setCharacter] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.container}>
            <h1 className={style.name}>{character.name}</h1>
            <div className={style.descripcion}>
               <h2>Status | {character.status}</h2>
               <h2>Gender | {character.gender}</h2>
               <h2>Specie | {character.species}</h2>
               <h2>Origin | {character.origin?.name}</h2>
            </div>
            <img src={character.image} alt='' className={style.imagen}/>
        </div>
    );
}

export default Detail;