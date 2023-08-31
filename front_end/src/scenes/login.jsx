import React from 'react';
import { useEffect, useState } from "react";
import loginImg from '../assets/img/login.png';
import { useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import Logo from '../assets/logo_black.png'
import { toast } from 'react-toastify';

export default function Login(){
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const usenavigate = useNavigate();

    // const handleLogin = () => {
    //     navigate('/dashboard');
    //   };

      const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            // console.log('proceed');
            fetch("http://localhost:3030/users/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                // console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        localStorage.setItem('role', resp.role);
                        usenavigate('/dashboard')
                    }else{
                        toast.error('Please Enter valid credentials');
                    }
                }

            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }

      };

      const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }

        return result;
      };

    return (
        
        <div className="row vh-100 ">
           <div className="col-md-6 black-bg">
            <img src={loginImg} alt='logo' className='log-img'></img>
            </div> 
           <div className="col-md-6 p-50">
            <span><img src={Logo} alt="logo" width="15%" /></span>
            <div className="text-center mt-5">
                
                <h1 className='title-login'>Bienvenue</h1>
                <p className='text-login'>Entrer avec nous pour manager votre processus de production</p>
            </div>
            <div className="container top60">
            <form>
                <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur<span className="errmsg">*</span></label>
                   
                        <input value={username} onChange={e => usernameupdate(e.target.value)} type="text"  id="username" className="form-control username" placeholder="Entrer votre nom d'utilisateur" required />
                    
                    
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Mot de passe<span className="errmsg">*</span></label>
                    <input value={password} onChange={e => passwordupdate(e.target.value)} type="password" className="form-control password" id="exampleInputPassword1" placeholder="Entrer votre mot de passe" required />
                </div>
               <div className="text-end mt-3 "> <a href='#' className="link">Mot de passe oublié?</a></div>
                <div className="btn-submit mt-5">
                <button type="submit" className="btn btn-primary" onClick={ProceedLogin}>Connexion</button>
                </div>
                </form>
                </div>
            </div> 
        </div>
    )
}