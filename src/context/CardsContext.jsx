import {createContext,useState } from "react";
export const CardsContext = createContext();

export const CardsContextComp = (props)=>{
    
    const integrantesInit = [
        
      ]
      const [integrantes,setIntegrantes]=useState(integrantesInit);
      const [idEditarIntegrante,setIdEditarIntegrante]=useState();
      const [nickInput,setNickInput]=useState('');
      const [edadInput,setEdadInput]=useState('');
      const [imagenInput,setImagenInput]=useState('');
      const [idCounter,setIdCounter]=useState(0);
      const saveIntegrante = (nickIntegrante,edadIntegrante,imagenIntegrante)=>{
        setIntegrantes([...integrantes,{
          id:idCounter,
          nick:nickIntegrante,
          edad:edadIntegrante,
          imagen:imagenIntegrante
        }])
        setNickInput('');
        setEdadInput('');
        setImagenInput(null);
        setIdCounter(idCounter+1);
      }
      const editarIntegrante = (newNick,newEdad,newImage)=>{
        let integranteEditado = integrantes.find(elem=>elem.id===idEditarIntegrante);
        let indexOfIntegranteEditado = integrantes.indexOf(integranteEditado,0);
        integranteEditado = {
          id:integranteEditado.id,
          nick:newNick,
          edad:newEdad,
          imagen:newImage
        }
        let newArrayIntegrantes = [...integrantes];
        newArrayIntegrantes[indexOfIntegranteEditado] = integranteEditado;
        setIntegrantes(newArrayIntegrantes);
      }
      const deleteIntegrante = (id)=>{
        var integranteEliminado = integrantes.find(element=>element.id===id);
        console.log(integranteEliminado);
        var indexOfIntegranteEliminado = integrantes.indexOf(integranteEliminado,0);
        let newArrayIntegrantes = [...integrantes];
        newArrayIntegrantes.splice(indexOfIntegranteEliminado,1);
        setIntegrantes(newArrayIntegrantes);
        console.log(integrantes);
      }
      const abrirAgregarIntegranteModal = ()=>{
        setNickInput('');
        setEdadInput('');
      }
      const abrirEditarIntegranteModal = (id)=>{
        const integrante = integrantes.find(elem=>elem.id===id);
        setIdEditarIntegrante(id);
        setNickInput(integrante.nick);
        setEdadInput(integrante.edad);
      } 

    return(
        <CardsContext.Provider value={{
          integrantes,
          nickInput,
          edadInput,
          imagenInput,
          setNickInput,
          setEdadInput,
          setImagenInput,
          saveIntegrante,
          editarIntegrante,
          idEditarIntegrante,
          setIdEditarIntegrante,
          abrirAgregarIntegranteModal,
          abrirEditarIntegranteModal,
          deleteIntegrante
          }}>
            {props.children}
        </CardsContext.Provider>
    )
}

