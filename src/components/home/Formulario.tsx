import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import imageForm from '../../assets/Inicio/imageForm.webp'

// Interface para los datos del formulario
interface FormData {
  nombre: string;
  correo: string;
  estado: string;
  servicio: string;
  mensaje: string;
}

// Interface para los errores
interface FormErrors {
  nombre?: string;
  correo?: string;
  estado?: string;
  servicio?: string;
  mensaje?: string;
}

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    estado: '',
    servicio: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Opciones para el select de servicios
  const servicios = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'Contabilidad y nómina', label: 'Contabilidad y nómina' },
    { value: 'Estados financieros', label: 'Estados financieros' },
    { value: 'Finanzas', label: 'Finanzas' },
    { value: 'Consultoria financiera', label: 'Consultoria financiera' },
    { value: 'Procesos y control interno', label: 'Procesos y control interno' },
    { value: 'Impuestos', label: 'Impuestos' },
    { value: 'Legal', label: 'Legal' },
    { value: 'Recursos humanos', label: 'Recursos humanos' },
    { value: 'Tecnología', label: 'Tecnología' },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido';
    }

    if (!formData.estado.trim()) {
      newErrors.estado = 'El estado es requerido';
    }

    if (!formData.servicio) {
      newErrors.servicio = 'Selecciona un servicio';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulario válido:', formData);
      // Aquí iría la lógica de envío a API
      alert('Formulario enviado correctamente');
    }
  };

  // Función para determinar si un campo tiene contenido
  const hasContent = (value: string): boolean => value.trim() !== '';

  // Función para obtener clases del input basado en el estado
  const getInputClasses = (hasContent: boolean, hasError: boolean): string => {
    const baseClasses = "w-full px-4 py-4 border-b-2 border-[#8B4513] rounded-t-lg transition-all duration-200";
    const stateClasses = hasContent 
      ? 'bg-white text-gray-900 pt-6' 
      : 'bg-gray-100 text-gray-500 placeholder-gray-400';
    const errorClasses = hasError ? 'border-red-500' : '';
    
    return `${baseClasses} ${stateClasses} ${errorClasses}`;
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center w-full">
      {/* Contenedor principal sin márgenes laterales */}
      <div className="w-full flex flex-col lg:flex-row bg-white shadow-xl overflow-hidden mx-0 ">
        
        {/* Imagen - Responsive */}
        <div className="lg:w-4/10 w-full">
          <img 
            src={imageForm}
            alt="Contacto"
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>

        {/* Formulario - Responsive con bg-gray-200 */}
        <div className="lg:w-6/10 w-full p-8 md:p-22 bg-gray-200">
          <h2 className="text-3xl font-bold text-cafeBosc mb-2">CONTÁCTANOS</h2>
          <p className="text-black mb-8 font-bold">¿Cómo podemos ayudarte?</p>
          <p className='text-black mb-4'>Todos los campos son obligatorios</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Campo Nombre */}
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={getInputClasses(hasContent(formData.nombre), !!errors.nombre)}
                  placeholder="Nombre"
                />
                {hasContent(formData.nombre) && (
                  <label className="absolute top-2 left-4 text-xs text-gray-600 font-medium transition-all duration-200">
                    Nombre
                  </label>
                )}
              </div>
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
              )}
            </div>

            {/* Campo Correo */}
            <div className="relative">
              <div className="relative">
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className={getInputClasses(hasContent(formData.correo), !!errors.correo)}
                  placeholder="E-mail"
                />
                {hasContent(formData.correo) && (
                  <label className="absolute top-2 left-4 text-xs text-gray-600 font-medium transition-all duration-200">
                    E-mail
                  </label>
                )}
              </div>
              {errors.correo && (
                <p className="text-red-500 text-sm mt-1">{errors.correo}</p>
              )}
            </div>

            {/* Campos en línea para desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Campo Estado (input libre) */}
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    className={getInputClasses(hasContent(formData.estado), !!errors.estado)}
                    placeholder="Estado"
                  />
                  {hasContent(formData.estado) && (
                    <label className="absolute top-2 left-4 text-xs text-gray-600 font-medium transition-all duration-200">
                      Estado
                    </label>
                  )}
                </div>
                {errors.estado && (
                  <p className="text-red-500 text-sm mt-1">{errors.estado}</p>
                )}
              </div>

              {/* Campo Servicio (select) */}
              <div className="relative">
                <div className="relative">
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className={`${getInputClasses(hasContent(formData.servicio), !!errors.servicio)} appearance-none`}
                  >
                    {servicios.map((servicio) => (
                      <option key={servicio.value} value={servicio.value}>
                        {servicio.label}
                      </option>
                    ))}
                  </select>
                  {hasContent(formData.servicio) && (
                    <label className="absolute top-2 left-4 text-xs text-gray-600 font-medium transition-all duration-200">
                      Servicio
                    </label>
                  )}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.servicio && (
                  <p className="text-red-500 text-sm mt-1">{errors.servicio}</p>
                )}
              </div>
            </div>

            {/* Campo Mensaje */}
            <div className="relative">
              <div className="relative">
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className={`${getInputClasses(hasContent(formData.mensaje), !!errors.mensaje)} resize-none`}
                  placeholder="Mensaje"
                />
                {hasContent(formData.mensaje) && (
                  <label className="absolute top-2 left-4 text-xs text-gray-600 font-medium transition-all duration-200">
                    Mensaje
                  </label>
                )}
              </div>
              {errors.mensaje && (
                <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
              )}
            </div>

            {/* Botón Enviar - Ancho según contenido */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-cafeBosc text-white py-3 px-8 rounded-3xl font-semibold hover:bg-cafeOscuro transition-colors duration-200 transform hover:scale-105 active:scale-95 inline-flex items-center justify-center cursor-pointer"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;