 const url = "http://localhost:3000/altas"
export const eliminar = async(id) =>{
    try {
        await fetch(`${url}/${id}`,{
            method:"DELETE"
        })
    } catch (error) {
        console.log(error.message)
    }
}