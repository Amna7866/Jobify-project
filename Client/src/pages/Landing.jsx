import React from 'react'
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage.js'; 
import main from '../assets/images/main.svg' 
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/> 
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app 
            </h1> 
            <p>
            Welcome to JobTracker, your ultimate solution for managing your job applications effortlessly! Whether you're actively hunting for a new position or keeping track of ongoing opportunities, JobTracker simplifies the process. Our intuitive platform allows you to organize your applications, track their statuses, and manage upcoming interviews all in one place. Say goodbye to the chaos of scattered notes and spreadsheets—JobTracker is here to streamline your job search, keep you organized, and help you land your dream job with ease.
            </p> 
            <Link to="/register" className='btn register-link'>
              Register 
            </Link>
            <Link to="/login" className='btn '>
              Login / Demo User  
            </Link>
        </div>
        <img src={main} alt="Job Hunt" className='img main-img'/>  
      </div>
    </Wrapper>  
  );
};



export default Landing;  