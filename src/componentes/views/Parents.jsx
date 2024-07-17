import { useEffect, useState } from "react";
import data from "../../data/personas.json"

const Parents = () => {

  let [personas, setPersonas] = useState([]);

  const buscarPersonas = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    })
  }

  useEffect(() => {
    buscarPersonas()
      .then((res) => {
        setPersonas(res);
      });
  }, [])

  return (
    <main className="principal">
      <div className="principal__persona">
          {
            personas.length > 0 ? personas.map((persona) => {
              return (
                <div className="persona__ficha">
                  <p className="ficha__datos">Nombre: {persona.nombre}</p>
                  <p className="ficha__datos">Apellido: {persona.apellido}</p>
                  <p className="ficha__datos">Profesión: {persona.profesion}</p>
                </div>)
            }) : "No hay personas para mostrar"
          }
      </div>
    </main>
  );
};

export default Parents;
