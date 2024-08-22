import React,{useState} from 'react'
import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'; 
import { FormRow, Logo} from '../components'; 
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      setIsSubmitting(true);
      await customFetch.post('/auth/login', data);
      toast.success('take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    } finally {
      setIsSubmitting(false); 
    }
  };
  return(
    <Wrapper>
    <Form method = 'post' className='form'> 
      <Logo /> 
      <h4> login</h4>
      <FormRow type='email' name='email'  /> 
      <FormRow type='password' name='password'  />  
      <button type='submit' className='btn btn-block' disabled={isSubmitting}>
        {isSubmitting ? 'submitting...' : 'submit'} 
      </button>
      <button type='button' className='btn btn-block' onClick={loginDemoUser} disabled={isSubmitting}>
        explore the app
      </button>
      <p> 
          Not a Member Yet?
          <Link to='/register' className='member-btn'>
            Register 
          </Link>
        </p> 
    </Form>  
  </Wrapper> 
  );
};

export default Login;  