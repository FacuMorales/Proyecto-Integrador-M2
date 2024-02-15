function validation (errors, setErrors,property ,form){
    if(property==="email"){
            if(!form) setErrors({...errors, email: "Email vacio"})
            else{
                setErrors({...errors, email: ""});
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form)) setErrors({...errors, email: ""});
                else{
                    setErrors({...errors, email: "Email invalido"});
                    if(form.length > 35) setErrors({...errors, email: "Debe tener menos de 35 caracteres"});
                } 
            }
    }else{
        if(form.length < 6 || form.length > 10) setErrors({...errors, password: "La contraseña debe tener entre 6 y 10 caracteres"});
        else{
            setErrors({...errors, password: ""});
            if(!/[0-9]/.test(form)) setErrors({...errors, password: "La contraseña debe tener al menos un numero"});
        }
    }
};

export default validation;