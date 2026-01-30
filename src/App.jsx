import { useRef, useState } from "react";
import ItemLista from "./itemLista";

function App() {
  // let listaMercado = ["Banana", "Maçã", "Laranja", "Ovo"];
  const [listaMercado, setListaMercado] = useState([]);

  const inputAdicionar = useRef(); 
  // console.log(inputAdicionar.current);

  // Hook
  // useState - Cria uma variável de estado
  // useRef - Cria uma referência para um elemento do DOM

  const adicionarElementoNaLista = () => {
    const novaLista = [...listaMercado];
    const valorInput = inputAdicionar.current.value;

    if (valorInput !== "") {
      novaLista.push(valorInput);
      setListaMercado(novaLista);
  
      inputAdicionar.current.value = "";
    }


  }

  return (
    <>
      <h1>Lista de Mercado</h1>
      <input ref={inputAdicionar} type="text" placeholder="Digite um item"/>
      <button onClick={() => adicionarElementoNaLista()}>Adicionar</button>

      
      {listaMercado.length > 0 ? (
        <ul>
        {listaMercado.map((itemLista, index) => (
        <ItemLista key={index} itemLista={itemLista} listaMercado={listaMercado} setListaMercado={setListaMercado}/>
        ))}
        </ul>
      ) : (
        <p>Lista Vazia</p>
      )}
      
    </>
  )

  // Tag vazia (<> </>) é um fragmento React
}

export default App
