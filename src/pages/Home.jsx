import React from 'react'
import appFirebase from '../credentials'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)
function Home({correo}) {
  return (
    <div className="">
        <h1>pagina de inicio</h1>
        <h2>Bienvenido {correo}</h2>
        <button onClick={() => signOut(auth)}>Salir</button>
    </div>
    
  )
}

export default Home