import { isAxiosError } from "axios"
import { api } from "../lib/api"
import type { FormType } from "../types"

export const sendEmail = async (formData: FormType) => {
    try {
        const { data } = await api.post<string>('/contact/new-contact', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) throw new Error("Error al enviar el correo")
    }
}