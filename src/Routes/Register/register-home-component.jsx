import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/user-context';
import { useContext } from "react";
import './register-home-component.scss'

function Register(){
    const { isLoggedIn } = useContext(UserContext);

    return (
        <div className="registerTitle">
            <h1 className='titleRegister'>Acesso infinito a filmes e séries.</h1>
            <h2 className='subTitleRegister'>Veja em qualquer sitio. Cancele em qualquer altura.</h2>
            {(isLoggedIn === true) ?
                <div className='formationText'>
                    <p className='textLoggedIn'>Veja em streaming com acesso ilimitado a </p>
                    <p className='textLoggedIn'>séries e filmes no seu telemóvel, tablet, computador e televisor, sem ter de pagar mais.</p>
                    <p className='textLoggedIn'>As crianças também poderão descobrir novas aventuras e encontrar</p>
                    <p className='textLoggedIn'>os seus personagens favoritos num espaço dedicado, que está incluído na sua adesão.</p>
                </div>
                :
                <div>
                    <p className='formationText'>Quer começar a ver ? Coloque o seu e-mail para criar ou activar a sua conta.</p>
                    <div className="registerContainer">
                        <input className="registerInput" type="email" placeholder="Endereço de E-mail" />
                        <Link to={"/register"}>
                            <button className="registerBTN" type='button'>
                                    Começar
                            </button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Register;