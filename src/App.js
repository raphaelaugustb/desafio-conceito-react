import React,{useState,useEffect} from "react";
import api from './services/api'
import "./styles.css";

function App() {
  const [repositories,setRepositories] = useState([])
  
  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data)
    })
  })
  async function handleAddRepository() {
    const response = await api.post('/repositories',{
      title:"Desafio React.js",
      url:"https://github.com/raphaelaugustb/conceito-node-desafio",
      techs:["Node.js", "..."],
    })
    const repositorie = response.data
    
    setRepositories(...repositories,repositorie)
  }

  async function handleRemoveRepository(id) {
    api.delete(`/repositories/${id}`)
    setRepositories(repositories.filter(repositorie => repositorie.id !== id))
    
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
