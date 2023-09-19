import { useState, useEffect } from 'react'

function Formulario() {
  const [nombre, setNombre] = useState('Eros');
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Adminístralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5' action="">
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="nombreMascota">Nombre Mascota</label>
          <input id='nombreMascota' type="text" placeholder='Nombre de la Mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
          value={nombre} onChange={ (e) => setNombre(e.target.value) }
          />
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="nombrePropietario">Nombre del Propietario</label>
          <input id='nombrePropietario' type="text" placeholder='Nombre del Propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Correo Electrónico</label>
          <input id='email' type="email" placeholder='Correo Electrónico del Propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Fecha de Alta</label>
          <input id='alta' type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">Sintomas</label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="sintomas" placeholder='Describe los Síntomas' />
        </div>
        <input type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all '
          value="Agregar Paciente" />
      </form>
    </div>
  )
}

export default Formulario
