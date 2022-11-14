import React, { useContext, useRef} from 'react'
import { FirebaseContext } from '../../firebase';
//useContext lo vamos a ocupar para hacer unas modificaciones al firebase.db
// y el useRef para poder acceder a la opcion seleccionada


const Articulo = ({articulo}) => {
    //ref para acceder a un valor directamente 
    const existenciaRef = useRef(articulo.existencia);

    //context de firebase para cambios en la base de datos
    const { firebase } = useContext(FirebaseContext);

    const { id, nombre, imagen, existencia, categoria, precio, descripcion } = articulo;

//ETADO DEL PLATILLO EN FIREBASE
const actualizarDisponibilidad = () =>{
    const existencia = (existenciaRef.current.value === "true");

    try {
        firebase.db.collection('productos')
        .doc(id)
        .update({
            existencia
        })
    } catch (error) {
        console.log(error);
    }
    //console.log(existencia);
}

    return (  
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                        <img src={imagen} alt="imagen articulo"/>

                        <div className='sm:flex sm:-mx-2 pl-2'>
                                <label className='block mt-5 sm:w-2/4'>
                                    <span className='block text-gray-800 mb-2'>Existencia</span>
                                    
                                    <select 
                                    className='bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                                    value={existencia}
                                    ref={existenciaRef}
                                    onChange={ () => actualizarDisponibilidad() }
                                    >
                                        <option value="true">Disponible</option>
                                        <option value="false">No Disponible</option>
                                    </select>
                                </label>
                        </div>

                    </div>
                    <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        <p className='font-bold text-2xl text-black mb-4'>{nombre}</p>
                        <p className='text-gray-600 mb-4'>Categoria: {''}
                            <span className='text-gray-700 font-bold'>{categoria.toUpperCase()}</span>
                        </p>
                        <p className='text-gray-600 mb-4'>{descripcion}</p>

                        <p className='text-gray-600 mb-4'>Precio: {''}
                            <span className='text-gray-700 font-bold'>$ {precio}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Articulo;