import firebase, { db } from './firebase';
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";



//Alta
export const savePersonName = (name)=> {
 addDoc(collection(db, 'persons'),{name});
}

//Consulta

export const getPersons = async () => {
    const result = await getDocs(query(collection(db, 'persons')));
    return result;
}

//eliminar
export const deletePerson = async (id) => {
    await deleteDoc(doc(db,'persons', id));
} 

//modificar-

export const updatePerson= async (id,name)=> {
    await updateDoc(doc(db, 'persons',id),{name})
}