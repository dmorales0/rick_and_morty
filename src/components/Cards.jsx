import Card from './Card';

 
export default function Cards({characters} ) {
   return (
          <div>
          {
            characters.map(({name, status,species,gender,origin,image, id, } ) =>{
               return(
          
             <Card
                key= {id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                image={image}
                origin={origin.name}
                onClose={() => window.alert('Emulamos que se cierra la card')}
               />
         
               )
            })
          }
          </div>
      
   )
      
}
