import { loaderSistemas } from "../pages/Sistemas"
const url = "http://localhost:3000/altas"

export const cambios = async(obj)=>{
    try {
        await fetch(`${url}/${obj.id}`,{
            method: "PUT",
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json",
              }
        })
    } catch (error) {
        console.log(error.message)
    }
    loaderSistemas()
} 