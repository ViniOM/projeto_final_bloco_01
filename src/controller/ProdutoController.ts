import {Produto} from "../model/Produto"
import {ProdutoRepository} from "../repository/ProdutoRepository"

export class ProdutoController implements ProdutoRepository{

  private listaProdutos: Array<Produto> = new Array<Produto>();
  public id = 0;
  
  mostrarTodos(): void {
    for(let produto of this.listaProdutos) {
      produto.visualizar()
    }
  }

  cadastrar(produto: Produto): void {
    this.listaProdutos.push(produto)
    console.log("Cadastrado com sucesso!")
  }

  atualizar(produto: Produto): void {
    let busca = this.buscarNoArray(produto.id)   
    
    if(busca !== null) {
      this.listaProdutos[this.listaProdutos.indexOf(busca)] = produto
      console.log("Atualizado com sucesso!")
    }
    else {
      console.log("O produto nao foi encontrado!")
    }
  }

  deletar(id: number): void {
    let busca = this.buscarNoArray(id)   
    
    if(busca !== null) {
      this.listaProdutos.splice(this.listaProdutos.indexOf(busca), 1)
      console.log("Deletado com sucesso!")
    }
    else {
      console.log("O produto nao foi encontrado!")
    }
  }

  selecionarPorId(id: number): void {
    let busca = this.buscarNoArray(id)   
    
    if(busca !== null) {
      busca.visualizar()
    }
    else {
      console.log("O produto nao foi encontrado!")
    }
  }

  public buscarNoArray(id: number): Produto | null {
    for(let produto of this.listaProdutos) {
      if(produto.id == id) {
        return produto
      }
    }
    return null
  }

  public gerarId(): number {
    return ++ this.id
  }
}