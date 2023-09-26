import Paciente from '../components/Paciente'

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className='md:w-1/2 lg:w-3/5 mx-5 mb-10'>
      <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administra tus {''}
        <span className='text-indigo-600 font-bold'>
          Pacientes y Citas
        </span>
      </p>
      <div className={`mx-5 px-5 pt-5 pb-10 bg-white shadow-md rounded-xl  ${pacientes && pacientes.length > 2 ? 'md:h-screen overflow-y-scroll' : ''}  `}>
        {pacientes && pacientes.length
          ?
          <>{pacientes.map(paciente => (<Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />))}</>
          :
          <><h2 className='font-black text-3xl text-center'>Aún no hay pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Comienza agregando tu primer paciente {''}
              <span className='text-indigo-600 font-bold'>
                y aparecerán en este lugar 😄
              </span>
            </p></>
        }
      </div>
    </div>
  )
}

export default ListadoPacientes
