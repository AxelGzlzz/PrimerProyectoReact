import 'bootstrap/dist/css/bootstrap.min.css'
import Informacion from './components/Informacion'
function App() {
  

  return (

    <main className='container my-4'>
    {/* siempre etiqueta de cierre, todo lo que retorne tiene que estar cerrado en un solo contenedor en react */}
    <h1 className='text-center'>Primer Proyecto react</h1>
   <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius animi officia, alias perferendis repellendus pariatur tempore dolorem inventore <br/> amet veniam praesentium? Necessitatibus nemo in minima labore placeat consectetur ab!</p>
 {/* Invocar componentes */}
   <Informacion></Informacion>
   
   {/* o tambien  simple  </Informacion>*/}
  

   </main>

  );
}

export default App
