import React from 'react'

function Paciente() {
    return (
        <div className='mt-4 px-5 py-10 bg-white shadow-md rounded-xl border'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>Eros</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre del Propietario: {''}
                <span className='font-normal normal-case'>David Gómez</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Correo Electronico: {''}
                <span className='font-normal normal-case'>correo@correo.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha alta: {''}
                <span className='font-normal normal-case'>10 de Diciembre de 2022</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate totam assumenda nam mollitia perspiciatis iste quisquam, inventore accusantium minima quia facilis voluptatum, consequuntur cum consectetur saepe maxime earum ratione.</span>
            </p>
        </div>
    )
}

export default Paciente
