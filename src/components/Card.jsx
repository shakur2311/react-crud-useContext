import react, { useContext, useEffect, useState } from 'react';
import { CardsContext } from '../context/CardsContext';

const Card = ({integrante})=>{

    const {abrirEditarIntegranteModal,deleteIntegrante}=useContext(CardsContext);

    return(
        <div>
            
            <div className="card shadow">
                <img src="/imagenes/background1.jpg" alt="" />
                <img className="circular-image" src={`${integrante.imagen}`} alt="imagen"/>
                <div className="card-body">
                    
                    <div className="card-title text-center">{integrante.nick}</div>
                    <div className="text-center">{integrante.edad}</div>
                    <div className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere inventore deserunt alias vitae nisi distinctio</div>
                    <div className="row justify-content-around mt-3">
                        <button class="btn btn-warning col-4" data-bs-toggle="modal" data-bs-target="#editarIntegranteModal"
                         onClick={()=>{
                            abrirEditarIntegranteModal(integrante.id);
                         }}><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="btn btn-danger col-4" onClick={()=>{deleteIntegrante(integrante.id)}}><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Card;