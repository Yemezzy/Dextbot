import './App.css';
import Buy from './Buy';
import Startpage from './Startpage';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Startpage/>}/>
  <Route path='/buy-dextbot' element={<Buy/>}/>
</Routes>                                                                                                                       


{/* */}
    </div>
  );
}

export default App;
