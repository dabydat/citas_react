import React from 'react'

function Paciente({ paciente }) {
    const { nombreMascota, nombrePropietario, email, alta, sintomas } = paciente;
    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>{nombreMascota}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre del Propietario: {''}
                <span className='font-normal normal-case'>{nombrePropietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Correo Electronico: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha alta: {''}
                <span className='font-normal normal-case'>{alta}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>
        </div>
    )
}

export default Paciente
