import "./App.css";
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = "facu44515119@gmail.com";
   const PASSWORD = "facu14";
   const location = useLocation();
   const navigate = useNavigate();

   function login (userData){
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   function onClose(id){
      const newId = parseInt(id, 10);
      const newArray = characters.filter((pj)=>{
         return pj.id !== newId;
      });
      setCharacters(newArray);
   }

   function navRender () {
      if (location.pathname !== '/') return <Nav onSearch={onSearch}/>;  
      else return <></>;
   }

   return (
      <div className="App">
         {navRender()}
         <Routes>
            <Route path="/" element={<Form login={login}/>} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
         </Routes>
      </div>
   );
}

export default App;
