import React from 'react'

const ItemLista = ({itemLista, listaMercado, setListaMercado, setErro}) => {
  
    const removerItemDaLista = () => {
      const novaLista = [...listaMercado];
      const novaListaFiltrada = novaLista.filter(itemAtual => itemAtual !== itemLista);
      setListaMercado(novaListaFiltrada);
    }
    return (
    <>
    <li className='flex justify-between gap-2'>
      <p className='text-xl px-2'>{itemLista}</p>
      <button className="rounded-md bg-red-600 text-white px-2 cursor-pointer hover:bg-red-500 transition" onClick={() => {setErro(""); removerItemDaLista()}}>Remover</button>
    </li>
    </>
  )
}

export default ItemLista