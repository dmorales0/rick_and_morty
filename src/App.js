import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Cards from './components/Cards.jsx';
import Form from './components/Form';
import Favorites from './components/favorites';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';



const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'a33dd7cb8202.ab8e20e652996d9aea96 ';

const email = 'duvan@gmail.com';
const password = '123duv';
 

function App() {

   
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([])
   const [acces, setAcces] = useState(false)
   
   const login = (userData)=>{
        if(userData.email === email && userData.password === password){
         setAcces(true); 
         navigate('/home')
        }
   }

   useEffect(() => {
     !acces && navigate('/')
   },[acces])

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data)=> {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }
  
   
   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}/>
         }
            
     
          <Nav onSearch={onSearch} />
          <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='about' element= {<About/>}/>
            <Route path='/detai/:id' element= {<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>

         
          </Routes>
         
        
        
      </div>
   );
}

export default App;
