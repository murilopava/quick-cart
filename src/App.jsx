import ItemLista from "./itemLista";

function App() {
  const listaMercado = ["Banana", "Maçã", "Laranja", "Ovo"];

  return (
    <>
      <h1>Lista de Mercado</h1>
      <input type="text" placeholder="Digite um item"/>
      <button>Adicionar</button>

      
      <ul>
        {listaMercado.map((itemLista, index) => 
        <ItemLista key={index} itemLista={itemLista}/>
      )}
      </ul>
    </>
  )

  // Tag vazia (<> </>) é um fragmento React
}

export default App
