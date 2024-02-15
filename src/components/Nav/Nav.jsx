import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav(props) {
    return(
        <nav className={style.container}>
            <div className={style.botonContainer}>
                <Link to="/home">
                    <button className={style.boton}>Home</button>
                </Link>
            </div>

            <div className={style.botonContainer}>
                <Link to="/about">
                  <button className={style.boton}>About</button>
                </Link>
            </div>
            
            <div className={style.botonContainer}>
                <Link to="/favorites">
                  <button className={style.boton}>Favorites</button>
                </Link>
            </div>

            <div className={style.searchContainer}>
                <SearchBar onSearch={props.onSearch}/>
            </div>

        </nav>
    );
};

export default Nav;