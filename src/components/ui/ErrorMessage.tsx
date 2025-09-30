import type { ReactNode } from "react"

type ErrorMessageType = {
    children: ReactNode
}

const ErrorMessage = ({ children } : ErrorMessageType) => {
  return (
    <p className="text-red-600 text-sm">* {children}</p>
  )
}

export default ErrorMessage