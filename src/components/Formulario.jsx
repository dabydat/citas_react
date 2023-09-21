import { useState, useEffect } from 'react'
import customError from '../helpers/errors'

function Formulario() {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState({ nombreMascota: '', nombrePropietario: '', email: '', alta: '', sintomas: '' })

  const [invalidForm, setInvalidForm] = useState(false);

  const FormGroup = {
    nombreMascota: { validations: { required: true, min: 5, max: 20 } },
    nombrePropietario: { validations: { required: true, min: 5, max: 50 } },
    email: { validations: { required: true, regExp: 'email' } },
    alta: { validations: { typeValue: 'dateY' } },
    sintomas: { validations: { required: true, min: 10, max: 50 } }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación del Formulario
    if ([nombreMascota, nombrePropietario, email, alta, sintomas].includes('')) {
      setInvalidForm(true);
      return;
    }
    setInvalidForm(true);
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
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md appearance-none outline-none text-neutral-800 ${error['nombreMascota'] ? 'border-red-600' : 'border-gray-300'}`}
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
            onKeyUp={(e) => setError({ ...error, nombreMascota: customError('Nombre Mascota', e.target.value, FormGroup.nombreMascota.validations) })} />
          <div className='text-red-600'>{error['nombreMascota']}</div>
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="nombrePropietario">Nombre del Propietario</label>
          <input id='nombrePropietario' type="text" placeholder='Nombre del Propietario'
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md appearance-none outline-none text-neutral-800 ${error['nombrePropietario'] ? 'border-red-600' : 'border-gray-300'}`}
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
            onKeyUp={(e) => setError({ ...error, nombrePropietario: customError('Nombre del Propietario', e.target.value, FormGroup.nombrePropietario.validations) })} />
          <div className='text-red-600'>{error['nombrePropietario']}</div>
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Correo Electrónico</label>
          <input id='email' type="email" placeholder='Correo Electrónico del Propietario'
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md appearance-none outline-none text-neutral-800 ${error['email'] ? 'border-red-600' : 'border-gray-300'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyUp={(e) => setError({ ...error, email: customError('Correo Electrónico', e.target.value, FormGroup.email.validations) })} />
          <div className='text-red-600'>{error['email']}</div>
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Fecha de Alta</label>
          <input id='alta' type="date"
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md appearance-none outline-none text-neutral-800 ${error['alta'] ? 'border-red-600' : 'border-gray-300'}`}
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
            onKeyUp={(e) => setError({ ...error, alta: customError('Fecha de Alta', e.target.value, FormGroup.alta.validations) })} />
          <div className='text-red-600'>{error['alta']}</div>
        </div>
        <div className='mt-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">Síntomas</label>
          <textarea
            id="sintomas" placeholder='Describe los Síntomas'
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md appearance-none outline-none text-neutral-800 ${error['sintomas'] ? 'border-red-600' : 'border-gray-300'}`}
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            onKeyUp={(e) => setError({ ...error, sintomas: customError('Síntomas', e.target.value, FormGroup.sintomas.validations) })} />
          <div className='text-red-600'>{error['sintomas']}</div>
        </div>
        <input type="submit"
          className='bg-indigo-600 w-full p-3 mt-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all'
          value="Agregar Paciente" />
      </form>
    </div>
  )
}

export default Formulario
