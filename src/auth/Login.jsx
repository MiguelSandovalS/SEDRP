import React from 'react'
import {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import appFirebase from '../credentials';
const auth = getAuth(appFirebase)
import ImagenLogoITC from '../assets/ITC.png'
function Login() {

    const [validacion, setValidacion] = useState(false);
    const Autenticar = async(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (validacion) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
            } catch (error) {
                alert("Verifica la contraseña")
            }
        }else{
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                alert("Verifica el correo o contraseña")                
            }
        }
    }
  return (
    <div>
        <div className="card">
            <form onSubmit={Autenticar}>
                <input type="text" placeholder='Ingresa tu correo' className='' id='email' />
                <input type="password" placeholder='Ingresa tu contraseña' className='' id='password'/>
                <button className=''>{validacion ? "Registrate" : "Inicia Sesion"}</button>
            </form>
            <h4>
                {validacion ? "Si ya tienen una cuenta" : "No tienens cuenta"}<button onClick={ () => setValidacion(!validacion)}>{validacion ? "Inicia Sesion" : "Registrate"}</button>
            </h4>
        </div>
        <h4>

        </h4>
        {/* <img src={ImagenLogoITC} className='logoICT'/> */}
    </div>
  )
}

export default Login