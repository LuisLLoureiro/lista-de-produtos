  export default function ProdutoCard({ nome, valor, descricao }) {
    return (
      <div>
        <h2>{nome}</h2>
        <h3>{valor}</h3>
        <p>{descricao}</p>
      </div>
    )
  }
  
  