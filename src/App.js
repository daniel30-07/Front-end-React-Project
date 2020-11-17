import React, { useState, useEffect } from 'react'
import api from './services/api'

import './App.css'
import backgroundImage from './assets/background.jpg'

import Header from './components/Header'


function App() {
  const [projects, setProjects] = useState([])

  useEffect(()=> {
    api.get('projects').then(res => {
      setProjects(res.data)
    })
  }, [])
//useEffect recebe dois parametros, o primeiro é a função e o segundo é quando

  async function handleAddProject() {
    //projects.push(`Novo Projeto ${Date.now()}`) -> altera diretamente o array
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]) 
    // Cria um novo array, copia o anterior através do spread operator'...projects' e adiciona o novo
    const res = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Daniel Carvalho"
    })

    const project = res.data

    setProjects([...projects, project])

  }

  return ( 
    <>  
      <Header title="Projects" /> 
      <img width={300} src={backgroundImage}/>
      <ul>
         {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;