import React from 'react'

export default function (props) {
const { min, max} = props

const resultado = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h5>Sortear um número aleatório entre:</h5>
            <h5>{min} entre {max}</h5>
            <h5>Resultado: {resultado}</h5>
        </div>
    )
}