import React from 'react'

export default function(props) {
    return (
        <div>
            <div> {props.texto}</div>
            <div> {props.numero}</div>
            <div> {props.nerd ? 'Verdadeiro' : 'Falso'}!!</div>
        </div>
    )
}