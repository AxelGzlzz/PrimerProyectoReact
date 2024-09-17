//para crear estados y cuand ocambie el valor se renderize
import { useState } from "react";

const Contador = () => {
  // camelquese
  // Crear estado STATE funcional components
  // segundo lugar nombre de una funcion,useState(1) se inicializa en 1 numero
  const [numero, setNumero] = useState(1);


  const sumar = () => {
    // con parametross
    setNumero(numero + 1);
  };

  return (
    <section className="my-4">
      <h2>Contador</h2>
      <h4>{numero}</h4>
      {/* si la funcion tiene parametros ()=> sumar(parametro) */}
      <button className="btn btn-primary me-3" onClick={sumar}>
        +1
      </button>
      {/* tambien se puede hacer en funciones anonimas cuando la funcion es corta */}
      <button className="btn btn-warning" onClick={()=>setNumero(numero -1)}>-1</button>
    </section>
  );
  //jamas linea aqui
};

export default Contador;
