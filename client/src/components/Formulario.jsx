import React, { useState } from 'react';
import axios from "axios";
import "./Form.css"
function Formulario() {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // const getData = () => {
  //   fetch('http://161.35.232.68:3000/api/', {
  //     method:"POST",
  //     headers:{"Content-Type":"application/json"},
  //     body: JSON.stringify({
  //       query: `
  //         query {
  //           users {
  //             id
  //             name
  //           }
  //         }
  //       `
  //     })     
  //   })
  //   .then(res => {
  //     console.log(res);
  //   })
  //   ;
  // }


  const enviarMensaje =async (numero)=>{
    const res = await axios.post(
      `http://localhost:8000/post`,{number: numero}
  );
  console.log(res)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer algo con los datos del formulario,
    // como enviar una petición a un servidor
    console.log(phoneNumber, isChecked);
    enviarMensaje(phoneNumber)
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className='item flexs'>
      <label>
        Telefono:
      </label>
      <input id='input' type="tel" value={phoneNumber} onChange={handlePhoneChange} />
      </div>
      <div className='item'>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckChange} />
        Recibir Notificaciones
      </label>
      </div>
      <div className='item botones'>
      <button type="submit">Enviar</button>
      </div>
    </form>
    </div>
  );
}
export default Formulario;