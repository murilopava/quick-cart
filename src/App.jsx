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
    <div className="max-w-96 w-full flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Lista de Mercado</h1>

      <div className="w-full flex gap-2">
        <input className="w-full border border-gray-600 rounded-md px-2" ref={inputAdicionar} type="text" placeholder="Digite um item"/>
        <button className="rounded-md bg-gray-800 text-white px-2 cursor-pointer hover:bg-gray-500 transition" onClick={() => adicionarElementoNaLista()}>Adicionar</button>
      </div>

      
      {listaMercado.length > 0 ? (
        <ul className="w-full flex flex-col gap-2">
        {listaMercado.map((itemLista, index) => (
        <ItemLista key={index} itemLista={itemLista} listaMercado={listaMercado} setListaMercado={setListaMercado}/>
        ))}
        </ul>
      ) : (
        <p className="text-xl">Sua lista esta vazia!</p>
      )}
      
    </div>
  )

  // Tag vazia (<> </>) é um fragmento React
}

export default App
