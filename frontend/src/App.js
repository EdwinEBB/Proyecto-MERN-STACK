import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Listausuario } from './components/Listausuario';
import { Crearusuario } from './components/Crearusuario';
import { Navegacion } from './components/Navegacion';

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
