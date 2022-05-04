import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Routes/Header/header-component';
import Footer from './Routes/Footer/footer-component';
import { links } from './Components/Links/links-db';
import Main from './Routes/Main/main-component';
import RegisterHomepage from './Routes/Register/Register Homepage/register-component';
import LogIn from './Routes/LogIn/login-component';
import Category from './Routes/Category/category-component';
import MediatypePage from './Routes/MediaType Page/mediatype-page-component';
import FilmeDetail from './Components/Watch/filme-component';
import SerieDetail from './Components/Watch/serie-component';
import UserProfile from './Routes/User Profile/user-profile-component';
import { UserContext } from './Context/user-context';

const App = () => {
  const { isLoggedIn } = useContext(UserContext);

 // Routes to different website pages
  return (
    <div>
    { /* Header and Footer always visible in entire site */}
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path='/register' element={isLoggedIn ? <UserProfile /> : <RegisterHomepage />} />
        <Route path='/login' element={isLoggedIn ? <UserProfile /> : <LogIn />} />
        <Route path='/category' element={<Category />} />
        <Route path='/filmes' element={<MediatypePage />} />
        <Route path='/series' element={<MediatypePage />} />
        <Route path='/verfilme' element={<FilmeDetail />} />
        <Route path='/verserie' element={<SerieDetail />} />
        <Route path='/userprofile' element={ <UserProfile /> } />
      </Routes>
      <Footer links={links} />
    </div>
  );
}

export default App;