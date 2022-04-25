import './register-component.scss';

function RegisterHomepage(){
    // Register form
    return(
        <div className='divRegister'>
            <form className='inputFields'>
                <input 
                    className='inputRegister'
                    type='text'
                    name='firstName'
                    aria-label='First Name'
                    placeholder='Digite o seu nome'
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
                    requerid
                />

                <label className='labelForm' htmlFor="password"></label>
                <input
                    className='inputRegister'
                    type='password'
                    name='password'
                    aria-label='Password'
                    placeholder='Digite a sua password'
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
                    placeholder='Digite  novamente a sua password'
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