import React, { useState } from 'react';
import MyGrid from '../Imports/MyGrid';
import MyFloatingButton from '../Imports/MyFloatingButton';
import './MyGridPage.css'
import ShowGrids from './ShowGrids';


function MyGridPage() {
    const [selectedButton, setSelectedButton] = useState([0])
    const [showLiveGrids, setShowLiveGrids] = useState(true)
    const [showDoneGrids, setShowDoneGrids] = useState(true)
    

    function onChangeFloatingButton(index) {
        let newSelectedButton = [...selectedButton]
        newSelectedButton[0] = index

        if (newSelectedButton[0] === 0 ){
            setShowDoneGrids(true)
            setShowLiveGrids(true)
        } else if (newSelectedButton[0] === 1) {
            setShowDoneGrids(false)
            setShowLiveGrids(true)
        } else if (newSelectedButton[0] === 2) {
            setShowDoneGrids(true)
            setShowLiveGrids(false)
        };

        setSelectedButton(newSelectedButton)
    }

    return (
        <div>
            <div>
                <MyFloatingButton 
                    onChangeFloatingButton={onChangeFloatingButton}
                />
            </div>
        
            <div className="gridPageBody">
                <ShowGrids show={showLiveGrids}>
                    <MyGrid
                        title="Caixas aguardando/expedidas"
                        numbers="10 / 30"
                    />
                    <MyGrid
                        title="Cobrança Tempo de Espera"
                        numbers="20 / 130"
                    />
                    <MyGrid
                        title="Corridas ativas"
                        numbers="20 / 130"
                    />
                    <MyGrid
                        title="Corridas em espera"
                        numbers="10 / 30"
                    />
                    
                    <MyGrid
                        title="Em Orçamento"
                        numbers="20 / 130"
                    />
                    <MyGrid
                        title="Motoboys online"
                        numbers="20 / 130"
                    />    
                </ShowGrids>
                
                <ShowGrids show={showDoneGrids}>
                    <MyGrid
                        title="Cancelada: cliente"
                        numbers="10 / 30"
                    />
                    
                    <MyGrid
                        title="Cancelada: motoboy"
                        numbers="20 / 130"
                    />
                    <MyGrid
                        title="Corridas concluídas"
                        numbers="20 / 130"
                    />  
                    <MyGrid
                        title="Duração média"
                        numbers="10 / 30"
                    />
                    
                    <MyGrid
                        title="Timeout"
                        numbers="20 / 130"
                    />
                    <MyGrid
                        title="Total: destinos"
                        numbers="20 / 130"
                    />  
                    <MyGrid
                        title="Total: não realizadas"
                        numbers="20 / 130"
                    />
                    <MyGrid
                        title="Total: retornos"
                        numbers="20 / 130"
                    />  
                </ShowGrids>
            </div>
        </div>
    );
};

export default MyGridPage;
