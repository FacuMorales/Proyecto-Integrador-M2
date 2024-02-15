import style from "./Form.module.css";
import imgForm from './ImgForm.png';
import { useState } from "react";
import validation from "./validation";

function Form ({login}){
    const [userData, setUserData] = useState({
        email:"",
        password:"",
    });
    const [errors, setErrors] = useState({
        email:"",
        password:"",
    });

    function handleChange (event) {
        const property = event.target.name;
        setUserData({...userData, [property]: event.target.value});
        validation(errors,setErrors,property,event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={style.max}>
            <form className={style.container} onSubmit={handleSubmit}>
                <img src={imgForm} alt='' className={style.imagen} />
                <div className={style.div}>
                    <label htmlFor="email" >Email</label>
                    <input type="text" id="email" name="email"  value={userData.email} onChange={handleChange} placeholder="persona@mail.com"/>
                    <span className={style.errors}>{errors.email}</span>
                    <label htmlFor="password" >Password</label>
                    <input type="text" id="password" name="password"  value={userData.password} onChange={handleChange} placeholder="******"/>
                    <span className={style.errors}>{errors.password}</span>
                </div>
                <button type="submit" className={style.boton}>Submit</button>
            </form>
        </div>
    );
}

export default Form;