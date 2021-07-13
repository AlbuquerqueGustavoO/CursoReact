import "./App.css"
import React from "react"

import Card from "./components/layout/Card"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega"

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#13 - Componente megasena" color="#414142" >
                <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#12 - Componente Contador" color="#424242" >
                <Contador numeroInicial={100}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#8BA9" >
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39" >
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#9 - Comunicação Direta" color="#F5" >
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#8 - Desafio Par ou Impar" color="#FF4C" >
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Gustavo' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'Gustavo@lindo.com' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ telefone: '9999999' }}></UsuarioInfo>
            </Card>

            <Card titulo="#7 - Desafio Repetição em Tabela" color="#FF4C50" >
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#6 - Lista de repetição" color="#FF4C65" >
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#5 - Componente Filho" color="#00C8F8" >
                <Familia sobreNome="FORT">
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                    <FamiliaMembro nome="Creuza"></FamiliaMembro>
                    <FamiliaMembro nome="Ronaldo"></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={10} />
                <Aleatorio min={1} max={10} />
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="#3 - Componente Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Componente Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do aluno:"
                    aluno="Pedro"
                    nota="9.5" />
            </Card>

            <Card titulo="#1 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)