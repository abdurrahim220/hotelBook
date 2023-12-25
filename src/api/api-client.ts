import { RegisterFormData } from "../pages/Register/Register";

const API_BASE_URL=`http://localhost:5000/api`

export const register = async (formData: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    });

    const responseBody = await response.json();
    if(!response.ok){
        throw new Error(responseBody.message)
    }
}