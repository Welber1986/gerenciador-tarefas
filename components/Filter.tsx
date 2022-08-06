import React from "react";

export const Footer = () => {
    return (
        <div className="container-filtros">
            <div className="title">
                <span>Tarefas</span>
                <img src='/filter.svg' alt="Filtrar Tarefas" />
                <div className="form">
                    <div>
                        <label>Data prevista de conclusão:</label>
                        <input type='date'/>
                    </div>
                    <div>
                        <label>até:</label>
                        <input type='date'/>
                    </div>
                    <div className="line"></div>
                    <div>
                        <label>Status:</label>
                        <select>
                            <option>Todas</option>
                            <option>Ativas</option>
                            <option>Concluídas</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}