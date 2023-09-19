import React from 'react'
import Paciente from '../components/Paciente'

function ListadoPacientes() {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administra tus {''}
        <span className='text-indigo-600 font-bold'>
          Pacientes y Citas
        </span>
      </p>
      <div className='m-3 px-5 pt-5 pb-10 bg-white shadow-md rounded-xl md:h-5/6 overflow-y-scroll'>
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
      </div>
    </div>
  )
}

export default ListadoPacientes
