import Image from '../../../assets/Servicios-Procesos/Bosc_Icons_diagrama.svg'

// const Section = () => {
//     return (
//         <div className='bg-title flex justify-around items-center'>
//             <div className='flex items-center '>

//                 <img src={Image} alt="Diagrama"
//                     className='w-[8rem]'
//                 />
//                 <div>
//                     <h3 className='font-bold text-2xl'>ELABORAMOS DIAGRAMAS DE PROCESOS DE NEGOCIO</h3>
//                     <p>De acuerdo con la naturaleza del negocio y/o entidad</p>
//                 </div>
//             </div>

//             <div>
//                 <button className="bg-azul text-white font-bold text-sm md:text-base px-4 py-2 rounded-full uppercase hover:bg-azul/80 transition-colors cursor-pointer hover:scale-110 hover:transition-transform hover:duration-300">Me interesa</button>
//             </div>
//         </div>


//     )
// }

// export default Section

const Section = () => {
    return (
        <div className='bg-title flex flex-col lg:flex-row justify-around items-center p-4 md:p-0'>
            <div className='flex items-center w-full md:w-auto mb-4 md:mb-0'>
                <img 
                    src={Image} 
                    alt="Diagrama"
                    className='w-20 sm:w-20 md:w-24 lg:w-[8rem] mr-4 md:mr-6'
                />
                <div className='text-left'>
                    <h3 className='font-title font-bold text-base sm:text-lg md:text-xl lg:text-2xl'>
                        ELABORAMOS DIAGRAMAS DE PROCESOS DE NEGOCIO
                    </h3>
                    <p className='text-[0.9rem] sm:text-sm md:text-base lg:text-base'>
                        De acuerdo con la naturaleza del negocio y/o entidad
                    </p>
                </div>
            </div>

            <div className='w-full md:w-auto flex justify-center md:mb-4 lg:mb-0'>
                <button className="font-title bg-negro text-white font-bold text-sm md:text-base px-4 py-2 rounded-full uppercase  hover:text-title cursor-pointer hover:scale-110 transition-transform duration-300">
                    Me interesa
                </button>
            </div>
        </div>
    )
}

export default Section