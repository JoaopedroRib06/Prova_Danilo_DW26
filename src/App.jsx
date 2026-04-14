import { useState, useEffect } from "react";
import StatusBar from "./components/StatusBar";
import Footer from "./components/Footer";
import Imagem from "./components/Imagem";

function App() {
  // useState (2,0 pts)
  const [alunos, setAlunos] = useState([
    { nome: "João", curso: "ADS" },
    { nome: "Maria", curso: "Engenharia" }
  ]);

  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");

  // useEffect (1,5 pts)
  useEffect(() => {
    console.log("Aplicação carregada!");
  }, []);

  // Interação (1,0 pt)
  function adicionarAluno() {
    if (nome && curso) {
      setAlunos([...alunos, { nome, curso }]);
      setNome("");
      setCurso("");
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <StatusBar mensagem="Sistema Acadêmico" />

      <Imagem />

      <h3>Cadastro de Alunos</h3>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="text"
        placeholder="Curso"
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
      />

      <br /><br />

      <button onClick={adicionarAluno}>Adicionar</button>

      <h3>Lista de Alunos</h3>

      {/* map (1,5 pts) */}
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>
            {aluno.nome} - {aluno.curso}
          </li>
        ))}
      </ul>

      <Footer/>
    </div>
  );
}

export default App;