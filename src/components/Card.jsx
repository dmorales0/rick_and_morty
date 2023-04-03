
export default function Card({name, status,species,gender,origin,image, id, onclose} ) {
   return (
      <div>
          <button onClick={onclose}>X</button>
         <h2>nombre:{name} </h2>
         <h2>status:{status}</h2>
         <h2>species:{species}</h2>
         <h2>gender:{gender}</h2>
         <h2>origin:{origin}</h2>
         <img src={image} alt=''/>
      </div>
   );
}
