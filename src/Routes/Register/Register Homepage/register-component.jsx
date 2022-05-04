import { useContext, useState } from 'react';
import { UserContext } from '../../../Context/user-context';
import './register-component.scss';

function RegisterHomepage(){
    const [formFields, setformFields] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        date: ''
    });

    const { setCurrentUser, setIsLoggedIn } = useContext(UserContext);

    const onSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, username, email, date } = formFields;
        setIsLoggedIn(true);
        setCurrentUser({ firstName: firstName, lastName: lastName, username: username, email: email, date: date});
    }

    const onChange = (event) => {
        const { name, value } = event.target;

        setformFields({ ...formFields, [name]: value})
    }

    // Register form
    return(
        <div className='divRegister'>
            <form onSubmit={onSubmit} className='inputFields'>
                <input 
                    className='inputRegister'
                    type='text'
                    name='firstName'
                    aria-label='First Name'
                    placeholder='Digite o seu nome'
                    onChange={onChange}
                    minLength='3'
                    maxLength='20'
                    requerid
                    autoFocus
                />
                
                <label className='labelForm' htmlFor="LastName"></label>
                <input
                    className='inputRegister'
                    type='text'
                    name='lastName'
                    aria-label='Last Name'
                    placeholder='Digite o seu apelido'
                    onChange={onChange}
                    minLength='3'
                    maxLength='20'
                    requerid
                />

                <label className='labelForm' htmlFor="email"></label>
                <input
                    className='inputRegister'
                    type='email'
                    name='email'
                    aria-label='E-mail'
                    placeholder='Digite o seu e-mail'
                    onChange={onChange}
                    requerid
                />

                <label className='labelForm' htmlFor="username"></label>
                <input
                    className='inputRegister'
                    type='text'
                    name='username'
                    aria-label='Username'
                    placeholder='Digite o seu username'
                    onChange={onChange}
                    requerid
                />

                <label className='labelForm' htmlFor="password"></label>
                <input
                    className='inputRegister'
                    type='password'
                    name='password'
                    aria-label='Password'
                    placeholder='Digite a sua password'
                    onChange={onChange}
                    minLength='3'
                    maxLength='20'
                    requerid
                />

                <label className='labelForm' htmlFor="passwordRepeat"></label>
                <input
                    className='inputRegister'
                    type='password'
                    name='password'
                    aria-label='Password'
                    placeholder='Digite novamente a sua password'
                    onChange={onChange}
                    minLength='3'
                    maxLength='20'
                    requerid
                />

                <label className='labelForm' htmlFor="born"></label>
                <input
                    className='inputRegister'
                    type='date'
                    name='date'
                    aria-label='Date'
                    onChange={onChange}
                    requerid
                />

                <div className='checkboxRegister'>
                    <label className='labelForm' htmlFor="checkBox">
                        <input
                            type='checkbox'
                            name='checkbox'
                            aria-label='Checkbox'
                            requerid
                        /> Não quero receber marketing da TBAFlix
                    </label>
                </div>

                <button className='registerButton'>Registar</button>
            </form>
        </div>
    )
}

export default RegisterHomepage;