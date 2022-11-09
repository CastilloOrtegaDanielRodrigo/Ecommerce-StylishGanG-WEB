import  React, { useContext } from 'react'; 
import {  useFormik } from 'formik';
import * as Yup from 'yup'
import { FirebaseContext } from '../../firebase';

const NuevoArticulo = () => {

    //Context con las operaciones de firebase
    const { firebase } = useContext(FirebaseContext)

    //validacion y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
            nombre: '',
            precio: '',
            categoria: '',
            imagen: '',
            descripcion: '',
        },
        //REGLAS DE VALIDACION DEL FORMULARIO DE PRODUCTOS
        validationSchema: Yup.object({
            nombre: Yup.string()
                            .min(3, 'Los productos deben tener almenos 3 caracteres')
                            .required('El Nombre del Producto es obligatorio'),

            precio: Yup.number()
                            .min(3, 'Debes agregar un numero')
                            .required('El Precio del Producto es obligatorio'),

            categoria: Yup.string()
                            .required('La Categoria del Producto es obligatorio'),

            descripcion: Yup.string()
                            .min(10, 'La Descripcion del Producto debe ser mas larga')
                            .required('La descripcion  del Producto es obligatorio'),
            

        }),
        onSubmit: perifericos => {
            try {
                firebase.db.collection('articulos').add(perifericos)
                
            } catch (error) {
                console.log(error)
                
            }
        }
    })


    return (  
        <>
            <h1 className="text-3xl font-light mb-4"> Agregar Nuevo Producto</h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <from
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Nombre del nuevo Producto"
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        
                        </div> 
                        { formik.touched.nombre && formik.errors.nombre ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un ERROR:</p>
                                <p>{formik.errors.nombre}</p>
                            </div>
                        
                        ) : null }


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="precio"
                                type="number"
                                placeholder="$0.00"
                                min="0"
                                value={formik.values.precio}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        { formik.touched.precio && formik.errors.precio ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un ERROR:</p>
                                <p>{formik.errors.precio}</p>
                            </div>
                        
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Categoria</label>
                            <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="precio"
                            name="categoria"
                            value={formik.values.categoria}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">-- Seleccione --</option>
                                <option value="teclados">Teclados</option>
                                <option value="mouse">Mouse</option>
                                <option value="monitores">Monitores</option>
                                <option value="audifonos">Audifonos</option>
                                <option value="controles">Controles</option>
                                <option value="videojuegos">Videojuegos</option>
                            </select>
                        </div>

                        { formik.touched.categoria && formik.errors.categoria ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un ERROR:</p>
                                <p>{formik.errors.categoria}</p>
                            </div>
                        
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">Imagen</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="imagen"
                                type="file"
                                value={formik.values.imagen}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripcion</label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-70"
                                id="descripcion"
                                placeholder="Descripcion del Producto"
                                value={formik.values.descripcion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></textarea>
                        </div>

                        { formik.touched.descripcion && formik.errors.descripcion ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un ERROR:</p>
                                <p>{formik.errors.descripcion}</p>
                            </div>
                        
                        ) : null }

                        <input 
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar Producto"
                        />

                    </from>

                </div>
            </div>
        </>
    );
}
 
export default NuevoArticulo;