/* eslint-disable @next/next/no-img-element */

import { NextPage } from 'next';
import React, { useState } from 'react';
import { Task } from '../types/Task';
import { Item } from './Item';

type ListProps = {
    tasks: Task[],
    getFilteredList(): void
}

export const List: NextPage<ListProps> = ({tasks, getFilteredList}) => {
    
    const selectToEdit = (task: Task) =>{

    }
    
    return (
        <div className={"container-listagem" + (tasks && tasks.length > 0 ? "" : " vazia")}>
            {
                tasks &&tasks.length > 0 ? 
                    tasks.map(t => <Item key={t._id} task={t} selectTaskToEdit={selectToEdit} /> )
                : <>
                    <img src="not-found.svg" alt="Nenhuma atividade encontrada"/>
                    <p>Você ainda não possui tarefas cadastradas!</p>
                </>
            }
        
        </div>
    );
}