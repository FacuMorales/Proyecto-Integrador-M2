import style from "./About.module.css";
import imgAbout from "./rick-and-morty.gif";

function About(){
    return(
        <div className={style.container}>
            <h1>Proyecto Integrador: App Rick & Morty</h1>
            <h3>Aplicación desarrollada con React y React-Redux</h3>
            <h4>Desarrollador: Facundo Morales</h4>
            <p>
                Esta es mi primer aplicación en React.<br/>
                En ella apliqué todas las tecnologias y habilidades aprendidas hasta el momento en el bootcamp.<br/>
                Podemos ver cosas como la modularización de componentes, estados, peticiones, buscador, filtrado, ordenamiento, estilos, etc.<br/>
                ¡Te invito a que la pruebes!
            </p>
            <h4>Un poco sobre mi:</h4>
            <p>
                Me llamo Facundo Morales, tengo 21 años y soy de Jujuy, Argentina, una provincia ubicada al norte del país.<br/>
                Estudié durante 2 años en la facultad la carrera de Analista Programador Universitario, pero no terminó de agradarme el formato y tecnologias enseñadas.<br/>
                Luego leí y descubrí SoyHenry, me interesó bastante el como planteaban el bootcamp, asi que me adentré y averigüe que necesitaba para acceder.<br/>
                Creé mi cuenta y empecé el PrepCourse, el cual no me costó demasiado debido a mis conocimientos previos gracias a lo aprendido en los 2 años de carrera.<br/>
                Finalmente rendí el HenryChallenge y logré aprobarlo a la primera, y fue asi como empecé en este grandioso camino.
            </p>
            <img src={imgAbout} alt="" className={style.img} />
            <h4>¡Gracias por ver mi aplicación!</h4>
        </div>
    );
}

export default About;