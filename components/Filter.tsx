import React, { useState } from "react";

export const Filter = () => {

    const [showFilters, setShowFilters] = useState(false); 

    return (
        <div className="container-filtros">
            <div className="title">
                <span>Tarefas</span>
                <img src='/filter.svg' alt="Filtrar Tarefas" onClick={e => setShowFilters(!showFilters)}/>
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
            {showFilters && <div className="filtrosMobile">
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
            </div>}
        </div>
    );
}