import Card from "../Card/Card";

export default function Cards(props) {
   return (
   <div>
      {
         props.characters.map(pj=>{
            return(
                  <Card
                   id={pj.id}  
                   name={pj.name}
                   status={pj.status}
                   species={pj.species}
                   gender={pj.gender}
                   origin={pj.origin.name}
                   image={pj.image}
                   onClose={props.onClose}
                  />
            )
         })
      }
   </div>
   );
}
