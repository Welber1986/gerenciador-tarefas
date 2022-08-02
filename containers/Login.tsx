/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Login = () => 
{
    return (
        <div className="container-login">
            <img className="logo" src="/logo.svg" alt="Logo FIAP"  />
            <form>
                <div>
                    <div className="input">
                        <img src="/mail.svg" alt="Informe seu E-mail" />
                        <input type="text" placeholder="Login" />
                    </div>
                    <div className="input">
                        <img src="/lock.svg" alt="Informe sua senha" />
                        <input type="password" placeholder="Senha" />
                    </div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}
