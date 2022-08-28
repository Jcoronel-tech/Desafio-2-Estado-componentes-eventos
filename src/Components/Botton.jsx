import React from 'react'

const Botton = ({clickBtn }) => {

    return (
    <div className="row justify-content-center">
        <button className='btn btn-success mb-3 col-4' type='button' disabled = {!clickBtn} >Agregar</button>
    </div>
    )
}

export default Botton