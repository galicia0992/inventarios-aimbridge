const url = "http://localhost:3000/altas"
export const altaRegistro = async(dato) =>{
    try {
        await fetch(url, {
            method:"POST", 
            body: JSON.stringify(dato),
            headers:{
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}