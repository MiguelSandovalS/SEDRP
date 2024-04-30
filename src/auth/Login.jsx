import React from 'react'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../credentials';
const auth = getAuth(appFirebase)
import ImagenLogoITC from '../assets/ITC.png'

function Login() {

    const [validacion, setValidacion] = useState(false);
    const Autenticar = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (validacion) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
            } catch (error) {                
                alert("Verifica la contraseña");
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                alert("Verifica el correo o contraseña");
            }
        }
    }
    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className="bg-white px-10 py-20 rounded-3xl shadow-lg shadow-gray-400">
                    <h1 className="text-5xl font-semibold">Bienvenido al ITCampeche</h1>
                    <p className="font-mediom text-lg text-gay-500 mt-4">Ingresa la siguiente información</p>
                    <form onSubmit={Autenticar}>                        
                        <div className="mt-8">
                            <label className='txt-lg font-medium'>Correo</label>
                            <input type="text" placeholder='Ingresa tu correo' className='w-full border-gray-100 rounded-2xl p-4 mt-5 bg-transparent' id='email' />
                        </div>
                        <div className="mt-8">
                            <label className='txt-lg font-medium'>Contraseña</label>
                            <input type="password" placeholder='Ingresa tu contraseña' className='w-full border-gray-100 rounded-2xl p-4 mt-5 bg-transparent' id='password' />
                            <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-md mt-5 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all' >{validacion ? "Registrate" : "Inicia Sesion"}</button>
                        </div>
                        <div className=' mt-8 flex justify-between items-center '>
                            <div className='flex items-center mb-4'>
                                <input type="checkbox" id='recordad' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                                <label for='recordar' className='ml-2 font-medium text-base'>Recordar tu contraseña</label>
                            </div>
                            <button className='font-medium text-base text-blue-500'>Olvidaste tu contraseña ?</button>
                        </div>

                    </form>
                    <div className='mt-5 flex justify-between items-center font-medium text-base'>
                        {validacion ? "Si ya tienen una cuenta" : "No tienes una cuenta"}<button className='font-medium text-base text-blue-500' onClick={() => setValidacion(!validacion)}>{validacion ? "Inicia Sesion" : "Registrate"}</button>
                    </div>
                </div>
            </div>
            <div className=' hidden relative lg:flex h-full bg-gray-200 w-1/2 flex-col items-center justify-center '>
                <div className="mb-28 text-2xl font-semibold">Sistema de expedientes para las residencias profecionales</div>
                <div className='w-60 h-60 bg-gradient-to-tr from-indigo-500 to-sky-500 rounded-full animate-bounce shadow-2xl shadow-blue-300 '>
                    <img src={ImagenLogoITC}  />
                </div>
            </div>
        </div>
    )
}

export default Login