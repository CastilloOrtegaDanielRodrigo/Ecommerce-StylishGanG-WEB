import React, { useState, useEffect, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';

import Articulo from '../ui/Articulo';

const Tienda = () => {

    //DEFINIR LOS STATES PARA LOS ARTICULOS
    //INICIA CON UN ARREGLO BASIO PERO UNA VEZ QUE INICIA LA CONSULTA E LLENA
    const [ articulos, guardarArticulos ] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    // CONSULTAR LA BASE DE DATOS AL CARGAR
    useEffect(() => {
        const obtenerArticulos = () => {
        firebase.db.collection('productos').onSnapshot(manejarSnapshot);

           
        }
        obtenerArticulos();
    }, []);
//Snapshot nos permite utilizar una base de datos en tiempo real de firestore
function manejarSnapshot(snapshot){
    const articulos = snapshot.docs.map(doc => {
        return{
            id: doc.id,
            ...doc.data()
        }  
    });
    //ALMACENA LOS RSULTADOS EN EL STATE
    guardarArticulos(articulos);
}


    return (  
        <>
            <h1 className="text-3xl font-light mb-4">Tienda</h1>
            <Link to="/nuevo-articulo" className=" bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Producto
            
            </Link>

            {articulos.map( articulo => (
                <Articulo
                key={articulo.id}
                articulo={articulo}
                />
            ))}
        </>
    );
}
 
export default  Tienda;