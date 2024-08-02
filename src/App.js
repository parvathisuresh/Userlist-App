import logo from './logo.svg';
import './App.css';
import Adduserlist from './components/Adduserlist';
import Searchuserlist from './components/Searchuserlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './components/Viewall';
function App() {
return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/"element={<Adduserlist/>}/>
    <Route path="/search"element={<Searchuserlist/>}/>
    <Route path="/viewall"element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
