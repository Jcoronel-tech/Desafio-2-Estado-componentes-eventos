
import React, { useState } from 'react';
import './App.css';
import Botton from './Components/Botton';
import Input from './Components/Input';
import Titulodesafio from './Components/Titulodesafio';

function App() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  //Valor que debe ingresar en el input password
  const clickBtn = password === "252525"; 

  return (
    <div className="container">
      <Titulodesafio />
      <Input 
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
      />
      <Botton clickBtn={clickBtn}/>
    </div>
  );
}

export default App;
