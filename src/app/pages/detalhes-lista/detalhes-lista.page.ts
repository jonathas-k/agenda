import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosContatosService } from 'src/app/services/dados-contatos.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Guid} from 'guid-typescript';
import { contato } from 'src/app/model/agenda.model';
 


@Component({
  selector: 'app-detalhes-lista',
  templateUrl: './detalhes-lista.page.html',
  styleUrls: ['./detalhes-lista.page.scss'],

})
export class DetalhesListaPage implements OnInit {
  private contato : contato
  public contatoForm: FormGroup
  public arrayContato: any

  public dadoSelecionado : any
  public modo_edicao = false
  public modo_exib = false


  constructor( private alertController: AlertController,
    private objdados : DadosContatosService,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder,
 
  
    ) { }


    iniciar_edicao_list(){
      this.modo_edicao =true
      this.modo_exib = true

    }
    finalizar_edicao_list(){
      const id : number = Number(this.route.snapshot.paramMap.get('id'))
      if (id > 0){
      this.modo_edicao =false
      this.modo_exib =false}
      else{
        this.objdados.recebe_Dados(this.dadoSelecionado)
        this.modo_exib =false}
    }
    deletarServico(){
      this.objdados.deleta_Dados(this.dadoSelecionado)
    }

    
  ngOnInit() {
this.contato={id: Guid.createEmpty(), nome:"",sobrenome:"", telefone:"",email:"",tipo:""}

this.contatoForm=this.formBuilder.group({
         id: [this.contato.id],
      nome : [this.contato.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
 sobrenome : [this.contato.sobrenome],
      tipo : [this.contato.tipo, Validators.required],
  telefone : [this.contato.tipo, Validators.required],
     email : [this.contato.email, Validators.email]
})

    const id : string = String(this.route.snapshot.paramMap.get('id'))
 if(id != 'add'){
    this.dadoSelecionado = this.objdados.filtrarContatos(id).then(Array=>this.dadoSelecionado=Array)}
else{
  this.dadoSelecionado ={id ,nome:"",telefone:"",email:"",tipotele:""}
  this.modo_edicao = true
  this.modo_exib =true
}

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'você tem certeza?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Não',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'sim',
          cssClass: 'alert-button-confirm',
          handler:()=>{
            this.deletarServico()
          }
        },
      ],
    });

    await alert.present();
  }


  enviar(){
    if(this.contatoForm.valid){
    this.objdados.inserir(this.contatoForm.value)
    
  }
}
}





