/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React, {useState, MouseEvent} from "react";
import { executeRequest } from "../services/ApiServices";


type LoginProps = {
    setAccessToken(e: string) : void
}

export const Login:NextPage<LoginProps> = ({setAccessToken}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const doLogin = async(evento : MouseEvent) => {
        try {
            evento.preventDefault();
            setError('');
            
            if(!login || !password){
               return setError('Favor informar usuário e senha.');
            }
            
            const body = {login, password};

            const result = await executeRequest('login','POST', body);
            if(!result || !result.data){
                setError('Ocorreu erro no ao processar login, tente novamente!');
            }

            const {name, email, token} = result.data;
            localStorage.setItem('accessToken',token);
            localStorage.setItem('userName',name);
            localStorage.setItem('userMail',email);
            setAccessToken(token);

        } catch (e : any){
            console.log(e);

            if(e?.response?.data?.error){
               return setError(e?.response?.data?.error);
            }
            setError('Ocorreu erro no ao processar login, tente novamente!');
        }
    }

    return (
        <div className="container-login">
            <img className="logo" src="/logo.svg" alt="Logo FIAP"  />
            <form>
                <p className="error">{error}</p>
                <div>
                    <div className="input">
                        <img src="/mail.svg" alt="Informe seu E-mail" />
                        <input type="text" placeholder="Login" 
                            value={login}
                            onChange={evento => setLogin(evento.target.value)}
                        />
                    </div>
                    <div className="input">
                        <img src="/lock.svg" alt="Informe sua senha" />
                        <input type="password" placeholder="Senha" 
                            value={password}
                            onChange={evento => setPassword(evento.target.value)}
                        />
                    </div>
                    <button onClick={doLogin}>Login</button>
                </div>
            </form>
        </div>
    );
}
