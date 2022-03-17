import './App.css';
import MainNav from './components/commons/MainNav';
import MobileNav from './components/commons/MobileNav';
import Footer from './components/commons/Footer';
import Home from './components/Home';
import Teams from './components/Teams';
import Register from './components/Register';
import Login from "./components/Login"
import Dashboard from './components/Dashboard';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import db from "./firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <MainNav />
      <MobileNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
        <Footer />
    </div>
    </BrowserRouter>
  ); 
}

export default App;
