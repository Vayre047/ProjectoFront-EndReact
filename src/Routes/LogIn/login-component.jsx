import './login-component.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../Context/user-context';

function LogIn(){

    const [formFields, setformFields] = useState({
        username: '',
        password: '',
    });

    const { setCurrentUser, setIsLoggedIn} = useContext(UserContext);

    const onSubmit = (event) => {
        event.preventDefault();
        const {username, password} = formFields;
        setIsLoggedIn(true)
        setCurrentUser({ username: username, password: password});
    }

    // Login Form
    return(
        <div className="divRegister">
            <form onSubmit={onSubmit} className='inputFields'>
                <input
                    className='inputRegister'
                    type='text'
                    name='username'
                    aria-label='Username'
                    placeholder='Digite o seu número ou nome de usário' minLength='3'
                    onChange={event => setformFields({username: event.target.value})}
                    maxLength='20'
                    required
                />

                <label className="labelForm" htmlFor="passwordRepeat"></label>
                <input
                    className='inputRegister'
                    type='password'
                    name='passwordLogIn'
                    aria-label='passwordLogIn'
                    placeholder='Digite a sua password'
                    onChange={event => setformFields({ password: event.target.value }) }
                    minLength='3'
                    maxLength='20'
                    required
                />

                <div className='checkboxRegister'>
                    <label className="checkboxLabel" htmlFor="checkBox">
                        <input
                            type='checkbox'
                            name='checkbox'
                            aria-label='Checkbox'
                        /> Lembrar-me
                    </label>
                </div>
                <button type='submit' className='registerButton'>Entrar</button>
            </form>
        </div>
    )
}

export default LogIn; 