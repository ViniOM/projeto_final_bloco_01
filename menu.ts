const leia = require("readline-sync");

import {Colors} from "./src/utils/Colors"
import {Produto} from "./src/model/Produto"
import {Material} from "./src/model/Material"
import {ProdutoController} from "./src/controller/ProdutoController"
 
let id, nome, preco, descricao, validade, opcao;

export function menu() {

  const produtoController: ProdutoController = new ProdutoController()

  produtoController.cadastrar(new Material(produtoController.gerarId(), "Pedra", 5.50, "Pedra Grande", "Indefinido"))
  produtoController.cadastrar(new Material(produtoController.gerarId(), "Agua", 9.90, "Agua Fedida", "25/04/2025"))

  while(true) {
    console.log(`${Colors.fg.magentastrong}********************************`)
    console.log(`\n           E-Commerce          \n`)
    console.log(`********************************${Colors.reset}`)
      
    console.log(Colors.fg.whitestrong,
                "1- listar todos os produtos")
    console.log(" 2- Listar Produto Pelo ID")
    console.log(" 3- Cadastrar Produto")
    console.log(" 4- Atualizar Produto")
    console.log(" 5- Deletar Produto")
    console.log(" 0- Sair")
    console.log(`${Colors.fg.magentastrong}*********************************\n`)
    console.log(`${Colors.fg.whitestrong}Escolha uma das opções ${Colors.fg.greenstrong}acima... ${Colors.reset}`)
    opcao = leia.questionInt("")
    console.clear()
    switch(opcao) {
      case 1:
        console.log(
          `${Colors.fg.magentastrong}*********************************\n`)
        console.log(Colors.fg.magentastrong,"   Listando todos os produtos", Colors.reset)
        console.log(Colors.fg.magentastrong,
          "\n*********************************\n", Colors.reset)
        produtoController.mostrarTodos()
        keyPress()
        break;
  
      case 2: 
        console.log(`${Colors.fg.magentastrong}********************************\n`)
        console.log(`       Listando Pelo ID`)
        console.log(`\n********************************${Colors.reset}`)


        console.log(`${Colors.fg.whitestrong}\nQual o ID que deseja ${Colors.fg.greenstrong}VER? ${Colors.reset}`)
        id = leia.questionInt("")
        
        produtoController.selecionarPorId(id)

        keyPress()
        break;
  
      case 3: 
        console.log(`${Colors.fg.magentastrong}*********************************\n`)
        console.log("         Cadastrar Produto")
        console.log(`\n *********************************\n${Colors.reset}`)
        console.log(`${Colors.fg.whitestrong}Qual o nome do produto? ${Colors.reset}`)
        nome = leia.question(" ");

        console.log(`${Colors.fg.whitestrong}Qual o preço do produto? ${Colors.reset}`)
        preco = leia.questionFloat(" ")

        console.log(`${Colors.fg.whitestrong}Qual a descrição do produto? ${Colors.reset}`)
        descricao = leia.question(" ")

        console.log(`${Colors.fg.whitestrong}Qual a validade do produto?${Colors.reset} `)
        validade = leia.question(" ")

        produtoController.cadastrar(new Material(produtoController.gerarId(), nome, preco, descricao, validade))
        keyPress()
        break;
  
      case 4:
        console.log(`${Colors.fg.magentastrong}*********************************\n`)
        console.log("       Atualizar Produto")
        console.log(`\n*********************************\n${Colors.reset}`)
        console.log(`${Colors.fg.whitestrong}Qual o ID que deseja atualizar? ${Colors.reset}`)
        id = leia.questionInt(" ")

        console.log(`${Colors.fg.whitestrong}Qual o NOVO nome do produto? ${Colors.reset}`)
        nome = leia.question(" ")

        console.log(`${Colors.fg.whitestrong}Qual o NOVO preço do produto? ${Colors.reset}`)
        preco = leia.questionFloat(" ")

        console.log(`${Colors.fg.whitestrong}Qual a NOVA descrição do produto? ${Colors.reset}`)
        descricao = leia.question(" ")

        console.log(`${Colors.fg.whitestrong}Qual a NOVA validade do produto? ${Colors.reset}`)
        validade = leia.question(" ")

        produtoController.atualizar(new Material(id, nome, preco, descricao, validade))
        keyPress()
        break;
  
      case 5:
        console.log(`${Colors.fg.magentastrong}*********************************\n`)
        console.log("       Deletar Produto")
        console.log(`\n*********************************\n${Colors.reset}`)
        console.log(`${Colors.fg.whitestrong}Qual ID que deseja deletar?${Colors.reset}`)
        id = leia.questionInt("")

        produtoController.deletar(id)
        keyPress()
        break;
  
      case 0:
        console.log(`${Colors.fg.whitestrong}\n\nPressione enter para ${Colors.fg.redstrong}SAIR...${Colors.reset}`);
        leia.prompt();
        process.exit(0)
    }
  }
}

function keyPress(): void {
  console.log(`${Colors.fg.whitestrong}\n\nPressione enter para ${Colors.fg.greenstrong}CONTINUAR...${Colors.reset}`);
  leia.prompt();
  console.clear()
}

menu()