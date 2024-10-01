import { jwtDecode } from "jwt-decode"

export const getToken = () => {
    try {
        
        const token = localStorage.getItem("token");
        if (token) {
            return jwtDecode(token);  
        }
        return null;
    } catch (error) {
        console.error("Error decoding token: ", error);
        return null;
    }
}

export const romoveToken = () =>
{
    localStorage.removeItem("token")
}
