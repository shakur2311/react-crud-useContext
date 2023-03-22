import react, { useEffect, useState,useContext } from 'react';
import Card from './Card';
import { CardsContext } from '../context/CardsContext';

const ListCard = ()=>{

    const {integrantes
        ,saveIntegrante
        ,nickInput,
        edadInput,
        imagenInput,
        setNickInput,
        setEdadInput,
        setImagenInput,
        editarIntegranteModal,
        abrirAgregarIntegranteModal,
        editarIntegrante,
        idEditarIntegrante}= useContext(CardsContext);
    const handleSubmitAdd = (e)=>{
        e.preventDefault();
        saveIntegrante(nickInput,edadInput,imagenInput)
        const addIntegranteForm = document.getElementById('addIntegranteForm');
        addIntegranteForm.reset();
    }
    const handleSubmitEdit = (e)=>{
        e.preventDefault();
        editarIntegrante(nickInput,edadInput,imagenInput)
        const editIntegranteForm = document.getElementById('editIntegranteForm');
        editIntegranteForm.reset();
    }
    const handleChangeFiles = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
            setImagenInput(reader.result.toString());
        }
    }

    return(
        
        <div className="">    
            {/* Modal Agregar Integrante*/}
            <div className="modal fade" id="agregarIntegranteModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar integrante</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmitAdd} id="addIntegranteForm">
                                <div className="input-group mb-3">
                                    <label htmlFor="nickInput"></label>
                                    <input type="text" className="form-control" 
                                    placeholder='Nickname' id="nickInput" name="nickInput" value={nickInput} onChange={(e)=>{setNickInput(e.target.value)}} />
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="edadInput"></label>
                                    <input type="number" className="form-control" 
                                    placeholder='Edad' id="edadInput" name="edadInput" value={edadInput} onChange={(e)=>{setEdadInput(e.target.value)}}/>
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="imagenInput"></label>
                                    <input type="file" className="form-control" 
                                    placeholder='imagen' onChange={handleChangeFiles}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" className="btn btn-primary"  data-bs-dismiss="modal" disabled={(nickInput!=""&&edadInput!="")?false:true}>Guardar cambios</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Endmodal */}

            {/* Modal Editar Integrante*/}
            <div className="modal fade" id="editarIntegranteModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar integrante</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmitEdit} id="editIntegranteForm">
                                <div className="input-group mb-3">
                                    <label htmlFor="nickInput"></label>
                                    <input type="text" className="form-control" 
                                    placeholder='Nickname' id="nickInput" name="nickInput" value={nickInput} onChange={(e)=>{setNickInput(e.target.value)}} />
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="edadInput"></label>
                                    <input type="number" className="form-control" 
                                    placeholder='Edad' id="edadInput" name="edadInput" value={edadInput} onChange={(e)=>{setEdadInput(e.target.value)}}/>
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="imageInput"></label>
                                    <input type="file" className="form-control" 
                                    placeholder='imagen' onChange={handleChangeFiles}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Guardar cambios</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Endmodal */}

            <div className='justify-content-end d-flex'>
                <button className='btn btn-info mb-3 text-white' data-bs-toggle='modal' onClick={()=>{abrirAgregarIntegranteModal()}} data-bs-target="#agregarIntegranteModal">Agregar Integrante</button>
            </div>

            <div className="list-card row g-3">
                {
                    integrantes.map((value,index)=>(
                        <div key={index} className="col-2">
                            <Card integrante={value}></Card>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ListCard;
