
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './pages/Mainpage';
import Videouploadpage from './pages/Videouploadpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/videoUpload' element={<Videouploadpage/>}/>
        <Route path='/home/:homeId' element={<Mainpage/>}/>
      </Routes>
    </BrowserRouter>
      

  );
}

export default App;
