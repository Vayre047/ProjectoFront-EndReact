import { UserContext } from '../../Context/user-context';
import { useContext } from 'react';
import './user-profile-component.scss';

function UserProfile(){
    const { isLoggedIn, currentUser } = useContext(UserContext);
    const { firstName, lastName, username, email, date } = currentUser; 

    return(
        <div>
            <div>
                <img className='imageProfile' src="../../../images/user-profile.png" alt="User Image" />
            </div>
            <div className='userDetails'>
                { username ? <p>Utilizador: { username }</p> : "" }
                { firstName ? <p>Nome: { firstName }</p> : "" }
                { lastName ? <p>Apelido: { lastName }</p> : "" }
                { email ? <p>E-mail: { email }</p> : "" }
                { date ? <p>Data de Nascimento: { date }</p> : "" }
            </div>
        </div>
    )
}

export default UserProfile;