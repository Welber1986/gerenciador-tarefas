import { NextPage } from 'next';
import React from 'react';

type FooterProps = {
    setShowModal(e : boolean) : void
}

export const Footer: NextPage<FooterProps> = ({setShowModal}) => {
    return (
        <div className='container-footer'>
                <button onClick={e => setShowModal(true)}><img src='/add.svg' alt='Adicionar tarefa'/> Adicionar Tarefa</button>
                <span>© Copyright {new Date().getFullYear()}. Todos os direitos reservados.</span>
        </div>
    );
}