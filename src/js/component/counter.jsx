import React from "react";
import propTypes from "prop-types";

const Counter = (props) => {


    return (
        <main className="text-center bg-black d-flex justify-content-center">
        <div className="text-white digitos"><i className="bi bi-clock"></i></div>
        <div className="text-white digitos">{Math.floor(props.segundos/100000) %10}</div>
        <div className="text-white digitos">{Math.floor(props.segundos/10000) %10}</div>
        <div className="text-white digitos">{Math.floor(props.segundos/1000) %10}</div>
        <div className="text-white digitos">{Math.floor(props.segundos/100) %10}</div>
        <div className="text-white digitos">{Math.floor(props.segundos/10) %10}</div>
        <div className="text-white digitos">{Math.floor(props.segundos/1) %10}</div>
        </main>
    )
}

Counter.propTypes = {
    segundos: propTypes.number
}

export default Counter;