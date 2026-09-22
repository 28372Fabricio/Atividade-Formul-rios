import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    genero: '',
    mensagem: '',
    aceitaTermos: false,
  })

  const [erro, setErro] = useState('')
  const [dados, setDados] = useState(null)

  function handleChange(event) {
    const { name, value, type, checked } = event.target

    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.nome || !form.email || !form.senha || !form.aceitaTermos) {
      setErro('Preencha todos os campos obrigatórios e aceite os termos.')
      setDados(null)
      return
    }

    setErro('')
    setDados({
      nome: form.nome,
      email: form.email,
      genero: form.genero || 'Não informado',
      mensagem: form.mensagem || 'Sem mensagem',
    })
  }

  return (
    <main className="container">
      <h1>Formulário</h1>

      <form onSubmit={handleSubmit} className="formulario">
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
          />
        </label>

        <label>
          Gênero:
          <select name="genero" value={form.genero} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </label>

        <label>
          Mensagem:
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows="4"
          />
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            name="aceitaTermos"
            checked={form.aceitaTermos}
            onChange={handleChange}
          />
          Aceito os termos.
        </label>

        <button type="submit">Enviar</button>
      </form>

      {erro && <p className="erro">{erro}</p>}

      {dados && (
        <section className="resultado">
          <h2>Dados enviados</h2>
          <p>Nome: {dados.nome}</p>
          <p>E-mail: {dados.email}</p>
          <p>Gênero: {dados.genero}</p>
          <p>Mensagem: {dados.mensagem}</p>
        </section>
      )}
    </main>
  )
}

export default App
