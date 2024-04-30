import React from 'react'
import appFirebase from '../credentials'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)
function Home({correo}) {
  return (
    <div className="flex flex-col items-center text-5xl font-blod text-center">
        <h1>Pagina de inicio</h1>
        <h2>Bienvenido {correo}</h2>
        <button onClick={() => signOut(auth)} className="w-20  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-sky-600 text-white text-lg font-bold mt-5">Salir</button>
    </div>
    
  )
}

export default Home