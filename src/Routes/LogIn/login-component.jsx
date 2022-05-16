import { useContext, useState } from 'react';
import { UserContext } from '../../Context/user-context';
import './login-component.scss';

function LogIn(){

    const [formFields, setformFields] = useState({
        username: '',
        password: '',
    });

    const { setCurrentUser, setIsLoggedIn} = useContext(UserContext);

    const onSubmit = (event) => {
        event.preventDefault();
        const {username, password} = formFields;
        setIsLoggedIn(true);
        setCurrentUser({ username: username, password: password});
    }

    const onChange = (event) => {
        const { name, value } = event.target;

        setformFields({ ...formFields, [name]: value})
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
                    onChange={onChange}
                    maxLength='20'
                    required
                />

                <label className="labelForm" htmlFor="passwordRepeat"></label>
                <input
                    className='inputRegister'
                    type='password'
                    name='password'
                    aria-label='password'
                    placeholder='Digite a sua password'
                    onChange={onChange}
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