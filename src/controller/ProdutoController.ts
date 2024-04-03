import {Produto} from "../model/Produto"
import {ProdutoRepository} from "../repository/ProdutoRepository"
import {Colors} from "../utils/Colors"

export class ProdutoController implements ProdutoRepository{

  private listaProdutos: Array<Produto> = new Array<Produto>();
  public id = 0;
  
  mostrarTodos(): void {
    if(this.listaProdutos.length == 0) {
      console.log(`${Colors.fg.redstrong}\nO produto nao foi encontrado! ${Colors.reset}`)
    }
    else {
      for(let produto of this.listaProdutos) {
        produto.visualizar()
      }
    }
  }

  cadastrar(produto: Produto): void {
    this.listaProdutos.push(produto)
    console.log(`${Colors.fg.greenstrong}\nCadastrado com sucesso!${ Colors.reset}`)
  }

  atualizar(produto: Produto): void {
    let busca = this.buscarNoArray(produto.id)   
    
    if(busca !== null) {
      this.listaProdutos[this.listaProdutos.indexOf(busca)] = produto
      console.log(`${Colors.fg.greenstrong}\nAtualizado com sucesso!${ Colors.reset}`)
    }
    else {
      console.log(`${Colors.fg.redstrong}\nO produto nao foi encontrado! ${Colors.reset}`)
    }
  }

  deletar(id: number): void {
    let busca = this.buscarNoArray(id)   
    
    if(busca !== null) {
      this.listaProdutos.splice(this.listaProdutos.indexOf(busca), 1)
      console.log(`${Colors.fg.greenstrong}\nDeletado com sucesso!${ Colors.reset}`)
    }
    else {
      console.log(`${Colors.fg.redstrong}\nO produto nao foi encontrado! ${Colors.reset}`)
    }
  }

  selecionarPorId(id: number): void {
    let busca = this.buscarNoArray(id)   
    
    if(busca !== null) {
      busca.visualizar()
    }
    else {
      console.log(`${Colors.fg.redstrong}\nO produto nao foi encontrado! ${Colors.reset}`)
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