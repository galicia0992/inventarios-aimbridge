const url = "http://localhost:3000/altas"

export const llamada = async(id) =>{
    try {
       const response = await fetch(`${url}/${id}`)
       const dato = await response.json()
       return dato
    } catch (error) {
        console.log(error.message)
    }
}