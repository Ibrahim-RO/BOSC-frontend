import Form from "./Form";
import imageForm from '../../assets/Inicio/imageForm.webp'


const Formulario: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center w-full">
      <div className="w-full flex flex-col lg:flex-row bg-white shadow-xl overflow-hidden mx-0 ">

        <div className="lg:w-4/10 w-full">
          <img
            src={imageForm}
            alt="Contacto"
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>

        <div className="lg:w-6/10 w-full p-8 md:p-22 bg-gray-200">
          <h2 className="text-3xl font-bold text-cafeBosc mb-2">CONTÁCTANOS</h2>
          <p className="text-black mb-8 font-bold">¿Cómo podemos ayudarte?</p>
          <p className='text-black mb-4'>Todos los campos son obligatorios</p>

          <Form
            design="w-full px-4 py-4 border-b-2 border-[#8B4513] rounded-t-lg transition-all duration-300 bg-gray-100 text-gray-500 placeholder-gray-400 outline-0"
            btn="bg-cafeBosc hover:bg-cafeOscuro"
          />
        </div>
      </div>
    </div>
  );
};

export default Formulario;