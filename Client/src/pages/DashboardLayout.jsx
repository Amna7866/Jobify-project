import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import Wrapper from '../assets/wrappers/Dashboard'; 
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const { data } = await customFetch('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext() 

const DashboardLayout = () => {
  const {user} = useLoaderData();
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar ] = useState(false); 
  const [isDarkTheme, setisDarkTheme ] = useState(false);  

  const toggleDarkTheme = () => {
    console.log('toggle dark theme'); 
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success('Logging out...');
  };

  return (
    <DashboardContext.Provider value={{user,showSidebar,isDarkTheme,toggleDarkTheme,toggleSidebar,logoutUser}}> 
      <Wrapper>
        <main className= 'dashboard'>  
          <SmallSidebar /> 
          <BigSidebar />  
          <div>
            <Navbar />
            <div className='dashboard-page' >
              <Outlet context={{ user }} /> 
            </div>
          </div> 
        </main> 
      </Wrapper>
    </DashboardContext.Provider> 

  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;