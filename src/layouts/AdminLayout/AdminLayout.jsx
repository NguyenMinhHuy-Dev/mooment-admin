import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import './AdminLayout.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { routes } from '../../routes/route';
import { Header } from '../../components/Header/Header';

export const AdminLayout = () => {
  const navigate = useNavigate();

  const [isOpenNav, setIsOpenNav] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('isAuth') === 'false') {
      navigate("/auth");
    } 
  }, []);

  return ( 
    <div className='admin_page'>
      <NavBar isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav}/> 

      <div className={`main_content ${isOpenNav}`}>  
        <Header />

        <Routes> 
          {routes.map(route => 
            <Route key={route.path} path={route.path} element={route.element}/>
          )}
        </Routes>

      </div>
    </div>  
  )
}
