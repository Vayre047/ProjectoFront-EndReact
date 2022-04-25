import './login-component.scss';

function LogIn(){
    // Login Form
    return(
        <div className="divRegister">
            <form className='inputFields'>
                <input
                    className='inputRegister'
                    type='text'
                    name='username'
                    aria-label='Username'
                    placeholder='Digite o seu número ou nome de usário' minLength='3'
                    maxLength='20'
                    requerid
                />

                <label className="labelForm" htmlFor="passwordRepeat"></label>
                <input
                    className='inputRegister'
                    type='password'
                    name='passwordLogIn'
                    aria-label='passwordLogIn'
                    placeholder='Digite a sua password'
                    minLength='3'
                    maxLength='20'
                    requerid
                />

                <div className='checkboxRegister'>
                    <label className="checkboxLabel" htmlFor="checkBox">
                        <input
                            type='checkbox'
                            name='checkbox'
                            aria-label='Checkbox'
                            requerid
                        /> Lembrar-me
                    </label>
                </div>
                <button className='registerButton'>Entrar</button>
            </form>
        </div>
    )
}

export default LogIn; 