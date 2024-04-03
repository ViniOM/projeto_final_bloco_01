import {Produto} from "./Produto"

export class Material extends Produto {
  private _validade: string

  constructor(id: number, nome: string, preco: number, descricao: string, validade: string) {
    super(id, nome, preco, descricao)
    this._validade = validade
  }

  public get validade(): string {
    return this._validade
  }

  public set validade(value: string) {
    this._validade = value
  }

  public visualizar(): void {
    super.visualizar()
    console.log(`Validade: ${this._validade}`)
  }
}	