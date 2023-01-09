import { useState, useEffect} from 'react';
import {getPersons, savePersonName,deletePerson, updatePerson}from './aplication/api';
import {   } from "./App.css";

function App() {

  const [personName, setPersonName] = useState(null);
  const [personId,setPersonId] = useState(null);
  const [persons, setPersons] = useState(null);
  //guardar
  const savePerson = async () =>{
    await savePersonName(personName);
     getPersonData();
  }
  //Borrar
  const removePerson = async() =>{
    await deletePerson(personId);
    getPersonData();
    //
  }

  useEffect(()=>{
    getPersonData();
  }, [])


  const getPersonData = async ()=>{
    const p = await getPersons();
    setPersons(p.docs);

  }

  //modificar
  const updatePersonData = async()=>{
   await updatePerson(personId,personName);
   getPersonData();
  }
  return (

    
    <div id="container" className="App">
       <label for="users">Usuarios</label><br></br>
       <br></br>
       <br></br> 
       <label for="nombre">Nombre</label> 
       <input type="text" onChange={e => setPersonName(e.target.value)}placeholder="Nombre"/> 
       <label for="Id">Id</label> 
       <input type="text" onChange={e => setPersonId(e.target.value)}placeholder="Id"/>
      
       
       <button onClick={savePerson}> Guardar</button><br></br>
       <button onClick={removePerson}>Eliminar</button>
       <button onClick={updatePersonData}>Modificar</button>
       {
        persons && persons.map(p=> <p>{p.data().name} : Id {p.id}</p>)
       }
    </div>
  );
}

export default App;
