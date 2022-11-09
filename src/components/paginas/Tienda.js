import * as React from 'react'; 
import { Link } from 'react-router-dom';
const Tienda = () => {
    return (  
        <>
            <h1 className="text-3xl font-light mb-4">Tienda</h1>
            <Link to="/nuevo-articulo" className=" bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Producto
            
            </Link>
        </>
    );
}
 
export default  Tienda;