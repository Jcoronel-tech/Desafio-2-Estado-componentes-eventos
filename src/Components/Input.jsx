import React from 'react'

const Input = ({name, password, setName, setPassword}) => {

    return (
    <section className="container">
        <div className="row g-3 ">
            <div className="col-12 my-3">
                <h5>Nueva Tarea</h5>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingresa un texto"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required/>
            </div>
            <div className="col-12 my-3">
                <h5>Contraseña</h5>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Ingresa una contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
    </section>
    )
}

export default Input