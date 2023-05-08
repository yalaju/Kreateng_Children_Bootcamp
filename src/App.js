import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar1 from './Components/Navbar1';
import Landingpag from './pages/Landingpag';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1/>
        <Routes>
          <Route path='/' element={<Landingpag/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
