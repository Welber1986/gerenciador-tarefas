/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Header = () => {
    return (
        <div className="container-header">
            <img src="/logo.svg" alt="Logo Fiap" className="logo"/>
            <button><span>+</span>Adicionar Tarefa</button>
            <div className="mobile">
                <span>Olá....</span>
                <img src="/exit-mobile.svg" alt="Sair"/>
            </div>
            <div className="desktop">
                <span>Olá....</span>
                <img src="/exit-desktop.svg" alt="Sair"/>
            </div>
        </div>
    );
}