import React, { useState } from 'react'

import './App.css'
import backgroundImage from './assets/background.jpg'

import Header from './components/Header'


function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end web'])
  //useState retorna um array com duas posições
  //1. Variável com seu valor inicia
  //2. Função para atualizarmos esse valor
  
  function handleAddProject() {
    //projects.push(`Novo Projeto ${Date.now()}`) -> altera diretamente o array
    setProjects([...projects, `Novo Projeto ${Date.now()}`]) 
    // Cria um novo array, copia o anterior através do spread operator'...projects' e adiciona o novo

  }

  return ( 
    <>  
      <Header title="Projects" /> 
      <img width={300} src={backgroundImage}/>
      <ul>
         {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;