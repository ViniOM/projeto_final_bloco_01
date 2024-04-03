import {Colors} from "../utils/Colors"

export abstract class Produto {
  private _id: number
  private _nome: string
  private _preco: number
  private _descricao: string

	constructor(id: number, nome: string, preco: number, descricao: string) {
    this._id = id
    this._nome = nome
    this._preco = preco
    this._descricao = descricao
	}
  
  // Getters
  public get id(): number {
    return this._id
  }

  public get nome(): string {
    return this._nome
  }

  public get preco(): number {
    return this._preco
  }

  public get descricao(): string {
    return this._descricao
  }

  // Setters
  public set id(value: number) {
    this._id = value
  }

  public set nome(value: string) {
    this._nome = value
  }

  public set preco(value: number) {
    this._preco = value
  }

  public set descricao(value: string) {
    this._descricao = value
  }

  public visualizar(){
    console.log(Colors.fg.greenstrong,"\n*************************")
    console.log("         Produto")
    console.log("*************************", Colors.reset)
    console.log(`${Colors.fg.whitestrong}ID: ${this._id}`)
    console.log(`Nome: ${this._nome}`)
    console.log(`Preço: R$ ${this._preco.toFixed(2)}`)
    console.log(`Descrição: ${this._descricao}`)
  }
}