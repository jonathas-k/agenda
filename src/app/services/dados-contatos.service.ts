import { Injectable } from '@angular/core';
//banco de dados
import { contato } from '../model/agenda.model';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class DadosContatosService {

  recebe_Dados(dadoSelecionado: any) {
    dadoSelecionado.id = this.todosContatos.length+1
    this.todosContatos.push(dadoSelecionado)                       
   }


  private todosContatos=[
    {id: 1,nome:"STG.JORGINHO ",sobrenome:"DA-12DESGASTADA", telefone: 190,email:"", tipotele:"trabalho" }]


  constructor(private storage: Storage) { }

  enviar_dados(){
    return this.todosContatos

  }


async filtrarContatos(id:string){
//const contatoSelecionado = this.todosContatos.filter(contatos => contatos.id === id)
//return contatoSelecionado[0]
JSON.parse( await this.storage.get(id))
}


deleta_Dados(dadosRecebidos:any){
  this.todosContatos.splice(this.todosContatos.indexOf(dadosRecebidos), 1)
}


inserir(dadosRecebidos: contato){
  dadosRecebidos.id = Guid.create()
  this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))

}
async listarContatos(){
  let arrayContato:contato [] = []
  await this.storage.forEach((valor:string)=>
  {const contato : contato=JSON.parse(valor); arrayContato.push(contato)}
  )
}
excluircontato(id : string){
 this.storage.remove(id)
}
atualizarContatoid(id : string, dadosRecebidos:contato){

  dadosRecebidos.id=Guid.parse(id)
  this.storage.set(dadosRecebidos.id.toString(),JSON.stringify(dadosRecebidos))
}
}
