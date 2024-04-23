import React from 'react';

function Filtre({handleFiltre ,filtres}){
    return <div>
        <h3>Filtres</h3>
        <div className="radio">
            <label htmlFor="all">Tout</label>
            <input id='all' type="radio" checked={filtres.all}  onChange={(e)=>handleFiltre( {all:e.target.checked, finished:false})} name='sexe' value='all'/>
            <label htmlFor="finished">Taches terminée(s)</label>
            <input id='finished' type="radio" checked={filtres.finished}  onChange={(e)=>handleFiltre({all:false, finished:e.target.checked})} name='sexe' value='finished'/>
        </div>
    </div>
        
    
}

export default Filtre;
