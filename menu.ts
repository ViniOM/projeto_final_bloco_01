const leia = require("readline-sync");

export function menu() {

  while(true) {
    console.log("********************************")
    console.log("* MENU *\n\n")
    console.log("1- listar todos os produtos")
    console.log("2- Listar Produto Pelo ID")
    console.log("3- Cadastrar Produto")
    console.log("4- Atualizar Produto")
    console.log("5- Deletar Produto")
    console.log("0- Sair")
    console.log("\n\n********************************")
    console.log("Escolha uma das opções acima: ")
    const opcao = leia.questionInt("")
  
    switch(opcao) {
      case 1:
        console.log("Listando todos os produtos")
        keyPress()
        break;
  
      case 2: 
        console.log("Listando Pelo ID")
        keyPress()
        break;
  
      case 3: 
        console.log("Cadastrar Produto")
        keyPress()
        break;
  
      case 4:
        console.log("Atualizar Produto")
        keyPress()
        break;
  
      case 5:
        console.log("Deletar Produto")
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
}

menu()