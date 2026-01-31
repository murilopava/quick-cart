# 🛒💨 Quick Cart 

Uma aplicação web para gerenciar lista de compras de supermercado.

## Sobre o Projeto

O **Quick Cart** é um projeto de estudo desenvolvido para praticar conceitos de React e gerenciamento de estado. A aplicação permite adicionar e remover produtos da lista de compras, oferecendo uma interface simples e funcional com validações e feedback ao usuário.

Este projeto foi criado com fins educacionais, focando em:
- Manipulação de estado com React Hooks (`useState`)
- Uso de referências DOM com `useRef`
- Componentização e passagem de props
- Renderização condicional
- Manipulação de arrays (map, filter, spread operator, includes)
- **Validação de dados** (trim, verificação de duplicatas)
- **Tratamento de erros e feedback ao usuário**
- Manipulação de eventos de formulário (onSubmit, onChange, onClick)
- Estilização com Tailwind CSS
- Boas práticas de desenvolvimento front-end

## Funcionalidades

- Adicionar produtos à lista de compras através de um campo de input
- **Validação de input vazio** - Não permite adicionar itens vazios ou apenas com espaços (usando `trim()`)
- **Prevenção de duplicatas inteligente** - Impede a adição de itens que já existem na lista, ignorando diferenças entre maiúsculas e minúsculas (ex: "Banana" e "banana" são considerados iguais)
- **Sistema de mensagens de erro** - Exibe feedback visual quando:
  - O campo está vazio
  - O item já existe na lista
- **Limpeza automática de erros** - As mensagens de erro desaparecem ao digitar no campo ou ao remover um item
- Remover produtos individualmente da lista
- Limpeza automática do campo de input após adicionar um item
- **Suporte à tecla Enter** - Permite adicionar itens pressionando Enter (formulário com `preventDefault`)
- Renderização condicional: exibe mensagem quando a lista está vazia
- Interface responsiva com largura máxima definida
- Design moderno e clean com efeitos de hover nos botões

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **JavaScript** - Linguagem de programação
- **Tailwind CSS** - Framework CSS para estilização

## Estrutura do Projeto

O projeto é composto por dois componentes principais:

- **App.jsx** - Componente principal que gerencia o estado da lista, validações e mensagens de erro
- **ItemLista.jsx** - Componente responsável por renderizar cada item da lista com seu botão de remoção

### Conceitos React Utilizados

- `useState` - Para gerenciar o estado da lista de mercado e mensagens de erro
- `useRef` - Para acessar o valor do input sem re-renderizações desnecessárias
- Props - Para comunicação entre componentes (App → ItemLista)
- Map - Para renderizar a lista de itens dinamicamente
- Filter - Para remover itens específicos da lista
- Some - Para verificar duplicatas com comparação personalizada
- toLowerCase - Para comparação case-insensitive (ignora maiúsculas/minúsculas)
- Spread Operator - Para criar cópias imutáveis do array
- Trim - Para remover espaços em branco no início e fim do input
- Event Handling - onChange, onClick, onSubmit
- Form - Prevenção de comportamento padrão com preventDefault()

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/supermarket-list.git
```

2. Navegue até o diretório do projeto:
```bash
cd supermarket-list
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm start
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Como Usar

1. Digite o nome do produto no campo de entrada
2. Clique no botão "Adicionar" ou pressione **Enter** para inserir o item na lista
3. O campo será limpo automaticamente após a adição
4. Cada item aparecerá na lista com um botão "Remover" ao lado
5. Clique em "Remover" para excluir um item específico da lista
6. Quando a lista estiver vazia, uma mensagem "Sua lista esta vazia!" será exibida

### Validações e Mensagens de Erro

- **Campo vazio:** Se tentar adicionar sem digitar nada (ou apenas espaços), aparecerá a mensagem "O campo não pode estar vazio"
- **Item duplicado:** Se tentar adicionar um item que já existe na lista, aparecerá a mensagem "Item já existe na lista"
  - A verificação ignora diferenças entre maiúsculas e minúsculas (ex: "Maçã", "maçã" e "MAÇÃ" são considerados duplicados)
- As mensagens de erro desaparecem automaticamente quando você começa a digitar novamente ou remove um item da lista

## Autor

Desenvolvido por Murilo Pavanello

---

**Nota:** Este é um projeto desenvolvido para fins de estudo e aprendizado.