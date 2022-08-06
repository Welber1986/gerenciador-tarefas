/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";

export const Login = () => 
{

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const doLogin = () => {
        try {
            alert('login:' + login + ', senha:' + password);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container-login">
            <img className="logo" src="/logo.svg" alt="Logo FIAP"  />
            <form>
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
