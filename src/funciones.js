
 const obtenerTodo = async(url,setSiguiente,  setAnterior,setPaginas, setTotal, setPersonajes)=>{

    const peticion = await fetch(url)
    const {info, results} = await  peticion.json()

    setSiguiente(info.next)
    info.prev =! null ? setAnterior(info.prev) : (null)
    setPaginas(info.pages)
    setTotal(info.count)
    setPersonajes(results)
   

}

 const getPersonaje = async(id,setPersonaje)=>{
    const request = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const response = await request.json()
    setPersonaje(response) 


}

export {
    obtenerTodo,
    getPersonaje
}