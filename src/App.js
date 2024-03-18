
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Mainpage from './pages/Mainpage.js'
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
