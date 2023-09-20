import { useState, useEffect } from 'react'
import customError from '../helpers/errors'

function Formulario() {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState({ 'nombreMascota': '', 'nombrePropietario': '', 'email': '', 'alta': '', 'sintomas': '' })

  const FormGroup = {
    nombreMascota: { inputName: "nombreMascota", inputValue: nombreMascota, validations: { min: 5, max: 20, typeValue: 'string' } },
    nombrePropietario: { inputName: "nombrePropietario", inputValue: nombrePropietario, validations: [] },
    email: { inputName: "email", inputValue: email, validations: [] },
    alta: { inputName: "alta", inputValue: alta, validations: [] },
    sintomas: { inputName: "sintomas", inputValue: sintomas, validations: [] }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando');

    // Validación del Formulario
    // if (customError(FormGroup)) {
    //   setError(true);
    // } else {
    //   console.log('todos llenoss');
    // }
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Adminístralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5' onSubmit={handleSubmit}>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="nombreMascota">Nombre Mascota</label>
          <input id='nombreMascota' type="text" placeholder='Nombre de la Mascota' 
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ${error['nombreMascota'] ? 'border-red-600' : ''}`}
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
            onKeyUp={(e) => setError({ ...error, nombreMascota: customError(e.target.value, FormGroup.nombreMascota) })} />
          <div className='text-red-600'>{error['nombreMascota']}</div>
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="nombrePropietario">Nombre del Propietario</label>
          <input id='nombrePropietario' type="text" placeholder='Nombre del Propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombrePropietario} onChange={(e) => setNombrePropietario(e.target.value)} />
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Correo Electrónico</label>
          <input id='email' type="email" placeholder='Correo Electrónico del Propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Fecha de Alta</label>
          <input id='alta' type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={alta} onChange={(e) => setAlta(e.target.value)} />
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">Sintomas</label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="sintomas" placeholder='Describe los Síntomas'
            value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
        </div>
        <input type="submit"
          className='bg-indigo-600 w-full p-3 mt-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all '
          value="Agregar Paciente" />
      </form>
    </div>
  )
}

export default Formulario
