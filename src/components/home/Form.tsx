import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import ErrorMessage from '../ui/ErrorMessage';
import type { FormType } from '../../types';
import { sendEmail } from '../../api';
import toast from 'react-hot-toast';

type FormTypeClassname = {
    design: string
    btn: string
}

const Form = ({ design, btn }: FormTypeClassname) => {
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

    const initialValues: FormType = {
        fullName: '',
        email: '',
        state: '',
        service: '',
        message: ''
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: initialValues })

    const mutation = useMutation({
        mutationFn: sendEmail,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
        }
    })

    const handleForm = (formData: FormType) => {
        mutation.mutate(formData)
    };

    return (
        <form onSubmit={handleSubmit(handleForm)} className="space-y-6">

            {/* Campo Nombre */}
            <div className="relative">
                <div className="relative">
                    <input
                        type="text"
                        className={`${design} ${errors.fullName && 'border-red-500'}`}
                        placeholder="Nombre"
                        {...register('fullName', {
                            required: "El nombre es obligatorio"
                        })}
                    />
                </div>
                {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
            </div>


            {/* Campo Correo */}
            <div className="relative">
                <div className="relative">
                    <input
                        placeholder="E-mail"
                        className={`${design} ${errors.email && 'border-red-500'} `}
                        {...register('email', {
                            required: "El correo es obligatorio",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "E-mail no válido",
                            },
                        })}
                    />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </div>

            </div>

            {/* Campos en línea para desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Campo Estado (input libre) */}
                <div className="relative">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Estado"
                            className={`${design} ${errors.state && 'border-red-500'} `}
                            {...register('state', {
                                required: "El estado es obligatorio"
                            })}
                        />
                    </div>
                    {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
                </div>

                {/* Campo Servicio (select) */}
                <div className="relative">
                    <div className="relative">
                        <select
                            className={`${design} appearance-none ${errors.service && 'border-red-500'} `}
                            {...register('service', {
                                required: "El servicio es obligatorio"
                            })}
                        >
                            {servicios.map((servicio) => (
                                <option key={servicio.value} value={servicio.value} className='text-black'>
                                    {servicio.label}
                                </option>
                            ))}
                        </select>

                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {errors.service && <ErrorMessage>{errors.service.message}</ErrorMessage>}
                </div>
            </div>

            {/* Campo Mensaje */}
            <div className="relative">
                <div className="relative">
                    <textarea
                        rows={4}
                        placeholder="Mensaje"
                        className={`${design} ${errors.message && 'border-red-500'} `}
                        {...register('message', {
                            required: "El mensaje es obligatorio"
                        })}
                    />
                </div>
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </div>

            {/* Botón Enviar - Ancho según contenido */}
            <div className="flex justify-start">
                <button
                    type="submit"
                    disabled={mutation.isPending}
                    className={`${btn} text-white py-3 px-8 rounded-3xl font-semibold uppercase transition-colors duration-200 transform hover:scale-105 active:scale-95 inline-flex items-center justify-center cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                    {mutation.isPending ? (
                        <>
                            <span className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Enviando...
                        </>
                    ) : (
                        "Enviar"
                    )}
                </button>
            </div>
        </form>
    )
}

export default Form