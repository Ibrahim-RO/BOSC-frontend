import { useNavigate } from "react-router-dom"

const Contactar = () => {

  const navigate = useNavigate()

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    navigate('/Contacto')
  }

  return (
    <button
        className='bg-btn hover:bg-btn/80 transition-colors text-black font-semibold px-4 py-2 rounded-full uppercase cursor-pointer'
        onClick={handleNavigate}
    >Contactar</button>
  )
}

export default Contactar