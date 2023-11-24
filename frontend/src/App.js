
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Crearusuario from './components/Crearusuario.js'
import Listausuario from './components/Listausuario.js'
import Navegacion from './components/navegacion.js'


function App() {
  return (
    <div className="">
      <Navegacion/>
      <div className='contauner p-4'>
        <Routes>
          <Route path="/" element={<Listausuario/>}/>
          <Route path="/crearusuario" element={<Crearusuario/>}/>
          <Route path="/edit:id" element={<Crearusuario/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
