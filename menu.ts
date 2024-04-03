const leia = require("readline-sync");

import {Produto} from "./src/model/Produto"
import {Material} from "./src/model/Material"
import {ProdutoController} from "./src/controller/ProdutoController"
 
let id, nome, preco, descricao, validade;

export function menu() {

  const produtoController: ProdutoController = new ProdutoController()

  produtoController.cadastrar(new Material(produtoController.gerarId(), "Papel", 3.50, "Papel normal", "Indefinido"))
  produtoController.cadastrar(new Material(produtoController.gerarId(), "Pedra", 5.50, "Pedra Grande", "Indefinido"))

  while(true) {
    console.log("********************************")
    console.log("* MENU *\n\n")
    console.log("1- listar todos os produtos")
    console.log("2- Listar Produto Pelo ID")
    console.log("3- Cadastrar Produto")
    console.log("4- Atualizar Produto")
    console.log("5- Deletar Produto")
    console.log("0- Sair")
    console.log("\n********************************")
    console.log("Escolha uma das opções acima: ")
    const opcao = leia.questionInt("")
    console.clear()
    switch(opcao) {
      case 1:
        console.log("\n\nListando todos os produtos\n")
        produtoController.mostrarTodos()
        keyPress()
        break;
  
      case 2: 
        console.log("Listando Pelo ID\n\n")

        console.log("Qual o ID que deseja ver? ")
        id = leia.questionInt("")
        
        produtoController.selecionarPorId(id)

        keyPress()
        break;
  
      case 3: 
        console.log("Cadastrar Produto")

        console.log("Qual o nome do produto? ")
        nome = leia.question("")

        console.log("Qual o preco do produto? ")
        preco = leia.questionFloat("")

        console.log("Qual a descrição do produto? ")
        descricao = leia.question("")

        console.log("Qual a validade do produto? ")
        validade = leia.question("")

        produtoController.cadastrar(new Material(produtoController.gerarId(), nome, preco, descricao, validade))
        keyPress()
        break;
  
      case 4:
        console.log("Atualizar Produto")

        console.log("Qual o ID que deseja atualizar? ")
        id = leia.questionInt("")

        console.log("Qual o nome do produto? ")
        nome = leia.question("")

        console.log("Qual o preco do produto? ")
        preco = leia.questionFloat("")

        console.log("Qual a descrição do produto? ")
        descricao = leia.question("")

        console.log("Qual a validade do produto? ")
        validade = leia.question("")

        produtoController.atualizar(new Material(id, nome, preco, descricao, validade))
        keyPress()
        break;
  
      case 5:
        console.log("Deletar Produto")

        console.log("Qual o ID que deseja deletar? ")
        id = leia.questionInt("")

        produtoController.deletar(id)
        keyPress()
        break;
  
      case 0:
        console.log("Saindo...")
        process.exit(0)
    }
  }
}

function keyPress(): void {
  console.log("\n\nPressione enter para continuar...");
  leia.prompt();
  console.clear()
}

menu()