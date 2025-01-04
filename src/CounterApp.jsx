import { useState } from "react";
import PropTypes from "prop-types";



export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(0);

    const handleAdd = (event) => {
        /* cuando si se espera que la viriable inicial entrege algo */
        setCounter  (counter +1);
        /* cuando no se recibe nada del metodo inicial */
        // setCounter((c) => c +1);
    };
    const handleSubtract = (e) =>{
        if(counter >=1){
            setCounter(counter - 1);
        }
        
    }
    const handleResete = (e) =>{
        
        setCounter( 0);
    }
    return (
        <>
            <h1>ConuterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleSubtract}>
                -1
            </button>
            <button onClick={handleResete}>
                reset
            </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

