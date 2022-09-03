import { NextPage } from 'next';
import React from 'react';

type HeaderProps = {
    sair() : void,
    setShowModal(e : boolean) : void
}

export const Header: NextPage<HeaderProps> = ({sair, setShowModal}) => {

    const fullName = localStorage.getItem('userName');
    const userName = fullName?.split(' ')[0] || '...';

    return (
        <div className="container-header">
            <img src="/logo.svg" alt="Logo Fiap" className="logo"/>
            <button onClick={e => setShowModal(true)}><span>+</span>Adicionar Tarefa</button>
            <div className="mobile">
                <span>Olá {userName}</span>
                <img src="/exit-mobile.svg" alt="Sair" onClick={sair}/>
            </div>
            <div className="desktop">
                <span>Olá {userName}</span>
                <img src="/exit-desktop.svg" alt="Sair" onClick={sair}/>
            </div>
        </div>
    );
}
