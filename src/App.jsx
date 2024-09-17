import 'bootstrap/dist/css/bootstrap.min.css'
import Informacion from './components/Informacion'
import Contador from './components/Contador';
function App() {
  

  return (

    <main className='container my-4 text-center'>
    {/* siempre etiqueta de cierre, todo lo que retorne tiene que estar cerrado en un solo contenedor en react */}
    <h1>Primer Proyecto react</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius animi officia, alias perferendis repellendus pariatur tempore dolorem inventore <br/> amet veniam praesentium? Necessitatibus nemo in minima labore placeat consectetur ab!</p>
 {/* Invocar componentes */}
   <Informacion></Informacion>
    {/* o tambien  simple  </Informacion>*/}
  
  <Contador></Contador>
   </main>

  );
}

export default App

// npm run build para produccion ,agarrar la carpeta dist y soltarla en netiflix si ha que deployr a mano

