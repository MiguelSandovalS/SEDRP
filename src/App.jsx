import {useState,useEffect} from 'react';
import appFirebase from './credentials';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Home from './pages/Home'
import Login from './auth/Login'
import './App.css'
const auth = getAuth(appFirebase)
function App() {
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase){
      setUsuario(usuarioFirebase);      
    }else{
      setUsuario(null)
    }
  });
  return (
    <div>
      {usuario ? <Home correo = {usuario.email} /> : <Login/>}
    </div>
  )
}

export default App
