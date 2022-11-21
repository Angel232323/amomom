import { useState, useEffect } from "react";
import { obtenerTodo, getPersonaje } from "./funciones";

function App() {
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const [siguiente, setSiguiente] = useState(null);
  const [anterior, setAnterior] = useState(null);
  const [paginas, setPaginas] = useState(null);
  const [total, setTotal] = useState(null);
  const [personajes, setPersonajes] = useState(null);
  const [personaje, setPersonaje] = useState(null);

  const irSiguiente = (url) => {
    setUrl(url);
  };
  const irAnterior = (url) => {
    setUrl(url);
  };

  useEffect(() => {
    obtenerTodo(
      url,
      setSiguiente,
      setAnterior,
      setPaginas,
      setTotal,
      setPersonajes
    );
  }, [url]);

  return (
    <div className="contenedor">
      <div className="header">
        <h2>Bienvenidos a la app de Rick and Morty</h2>
        <p>Total de personajes: {total}</p>
        <p>Cantida de paginas: {paginas}</p>

        {anterior != null ? (
          <button onClick={() => irAnterior(anterior)}>Anterior</button>
        ) : (
          ""
        )}
        {siguiente != null ? (
          <button onClick={() => irSiguiente(siguiente)}>Siguiente</button>
        ) : (
          ""
        )}

        <div>
          {personajes != null
            ? personajes.map((personaje) => (
                <p
                  key={personaje.id}
                  onClick={() => {
                    getPersonaje(personaje.id, setPersonaje);
                  }}
                >
                  {personaje.name}
                </p>
              ))
            : ""}
        </div>
      </div>

      <div className="personaje">
        {personaje != null ? (
          <div>
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
