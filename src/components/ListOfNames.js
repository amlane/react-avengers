import React from 'react';
import './Avengers.css';

function ListOfNames(props){
    return (
        <>
        {props.avengers.map( avenger => <li key={avenger.id} onClick={props.clickEvent}>{avenger.name}</li> )}
        </>
    )
}

export default ListOfNames;