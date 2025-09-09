import { useEffect, useState } from 'react'
import './App.css'
import ProdutoCard from "./components/ProdutoCard.jsx"

function App() {

  const [nome, setNome] = useState("")
  const [valor, setValor] = useState("")
  const [descricao, setDescricao] = useState("")
  const [carregando, setCarregando] = useState(true)
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const temporizador = setTimeout(() => {
      const apiFalsa = [
        { nome: "Cadeira", valor: 50, descricao: "cadeira de madeira vermelha" },
        { nome: "Copo", valor: 10, descricao: "copo de vidro americano" },
        { nome: "Mesa", valor: 150, descricao: "mesa de madeira verde" }
      ]
      setProdutos(apiFalsa)
      setCarregando(false)
    }, 4000)
    return () => clearTimeout(temporizador)
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    const novoProduto = { nome, valor, descricao }

    setProdutos([...produtos, novoProduto])
    setNome("")
    setValor("")
    setDescricao("")
  }
  if (carregando) {
    return <h1 className="carregamento">Carregando...</h1>
  }
  return (
    <>


      <form onSubmit={handleSubmit} className="formulario">
        <input type="text" required placeholder="Nome do Produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input type="number" required placeholder="Preço"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <input type="text" required placeholder="descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <button type="submit">Adicionar Produto</button>
      </form>
      <div className="cardProdutos">
        {produtos.map((produto, index) => (
          <ProdutoCard key={index} nome={produto.nome} valor={produto.valor} descricao={produto.descricao} />
        ))}
      </div>

    </>
  )
}

export default App
