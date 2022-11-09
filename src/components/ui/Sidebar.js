import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (  
        <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className=" text-white text-2xl tracking-wide text-center font-bold">Tienda StylishGanG</p>

                <p className="mt-3 text-gray-600">Administra la Tienda con las siguientes opciones</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/Tienda">Tienda</NavLink>
                </nav>
            </div>
        </div>
    );
}
 
export default Sidebar;
