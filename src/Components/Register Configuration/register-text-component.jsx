import { Link } from 'react-router-dom';

function RegisterText(){
    return(
        <div className="registerTitle">
            <h1>Acesso infinito a filmes e séries.</h1>
            <h2>Veja em qualquer sitio. Cancele em qualquer altura.</h2>
            <p>Quer começar a ver ? Coloque o seu e-mail para criar ou activar a sua conta.</p>
            <div className="registerContainer">
                <input className="registerInput" type="email" placeholder="Endereço de E-mail" />
                <button className="registerBTN" type='button'>
                    <Link className="registerLink" to={"/register"}>
                        Começar
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default RegisterText;