import React from 'react';
import loginImg from '../assets/img/login.png';
import { useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import Logo from '../assets/logo_black.png'

export default function Login(){
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard');
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
                    <label htmlFor="username">Nom d'utilisateur</label>
                   
                        <input type="text"  id="username" className="form-control username" placeholder="Entrer votre nom d'utilisateur" required />
                    
                    
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                    <input type="password" className="form-control password" id="exampleInputPassword1" placeholder="Entrer votre mot de passe" required />
                </div>
               <div className="text-end mt-3 "> <a href='#' className="link">Mot de passe oublié?</a></div>
                <div className="btn-submit mt-5">
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Connexion</button>
                </div>
                </form>
                </div>
            </div> 
        </div>
    )
}