import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid'
import PropTypes from 'prop-types';

const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Cuando el usuario agregar un gasto
    const agregarGasto = e => {
        e.preventDefault();
        // Validar
        if(cantidad <= 0 || nombre.trim() === ''){
            setError(true);
            return;
        }

        // Pasar la Validacion (Eliminar el mensaje del if)
        setError(false);

        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        
        // Pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);


        // Resetear el formulario
        setNombre('');
        setCantidad(0);
    }



    return ( 
        <form
                onSubmit={agregarGasto}
            >
                <h2>Agrega tus gastos aqui</h2>

                {error ? <Error mensaje="Todos los Campos Son Obligatorios"/> : null}

                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Ejemplo: Transporte"
                        value={nombre}
                        onChange={e => setNombre(e.target.value) }
                    />                
                </div>

                <div className="campo">
                    <label>Cantidad Gasto</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Ejemplo: 300"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value)) }
                    />                
                </div>
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Agregar Gasto"
                /> 

            </form>
    );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;