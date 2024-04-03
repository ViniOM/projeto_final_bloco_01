import {Produto} from "../model/Produto"

export interface ProdutoRepository {
  
  selecionarTodos(): void
  cadastrar(produto: Produto): void
  atualizar(produto: Produto): void
  deletar(id: number): void
  selecionarPorId(id: number): void
  
}