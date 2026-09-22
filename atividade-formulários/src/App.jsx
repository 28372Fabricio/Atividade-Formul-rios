import { useState } from 'react'
import './App.css'

function CampoTexto(props) {
  return (
    <label className="campo">
      {props.label}
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </label>
  )
}

function Livro(props) {
  return (
    <li className="livro-item">
      {props.livro.titulo} — {props.livro.autor} — {props.livro.anoPublicacao} — {props.livro.genero}
    </li>
  )
}

function FormularioLivro() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [anoPublicacao, setAnoPublicacao] = useState('')
  const [genero, setGenero] = useState('')
  const [livros, setLivros] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    const livro = {
      id: Date.now(),
      titulo,
      autor,
      anoPublicacao,
      genero,
    }

    setLivros((livrosAnteriores) => [...livrosAnteriores, livro])
    setTitulo('')
    setAutor('')
    setAnoPublicacao('')
    setGenero('')
  }

  return (
    <main className="container">
      <h1>Cadastro de livros</h1>

      <form onSubmit={handleSubmit} className="formulario">
        <CampoTexto
          label="Título"
          name="titulo"
          type="text"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          placeholder="O Senhor dos Anéis"
        />

        <CampoTexto
          label="Autor"
          name="autor"
          type="text"
          value={autor}
          onChange={(event) => setAutor(event.target.value)}
          placeholder="J.R.R. Tolkien"
        />

        <CampoTexto
          label="Ano de publicação"
          name="anoPublicacao"
          type="text"
          value={anoPublicacao}
          onChange={(event) => setAnoPublicacao(event.target.value)}
          placeholder="1954"
        />

        <CampoTexto
          label="Gênero"
          name="genero"
          type="text"
          value={genero}
          onChange={(event) => setGenero(event.target.value)}
          placeholder="Fantasia"
        />

        <button type="submit">Cadastrar</button>
      </form>

      {livros.length === 0 ? (
        <p className="mensagem-vazia">Nenhum livro cadastrado ainda.</p>
      ) : (
        <ul className="lista-livros">
          {livros.map((livro) => (
            <Livro key={livro.id} livro={livro} />
          ))}
        </ul>
      )}
    </main>
  )
}

function App() {
  return <FormularioLivro />
}

export default App
