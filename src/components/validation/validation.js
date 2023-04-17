const validation = (userData) =>{
    const errors = {};

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(userData.email)){
       errors.email = 'el email ingresado no es valido'
   }
   if(!userData.email){
    errors.email = ' debe ingresar un email'
   }
   if(userData.email.length > 35){
    errors.email = 'el email no debe superar los 35 caracteres'
   }
   if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$/.test(userData.password)){
       errors.password = 'la contrasena debede tener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'la contrasena debe tener un tamano entre 6 y 10 caracteres '
    }
   return errors
}

export default validation;