import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css'; 
import logo from '../assets/logo.png'; 

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const AuthForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/main');
  };

  return (
    <div className="auth-form-container">
      <div className="logo-container">
        <img src={logo} alt="MovieMania Logo" className="logo" />
        <h1 className="site-name">MovieMania</h1>
      </div>
      <div className="auth-form">
        <h2 className="form-title">Authorization Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username:</label>
            <input {...register('username')} />
            <p className="error-message">{errors.username?.message}</p>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" {...register('password')} />
            <p className="error-message">{errors.password?.message}</p>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
