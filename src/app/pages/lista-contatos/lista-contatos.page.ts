import { Component, OnInit } from '@angular/core';
import { DadosContatosService } from 'src/app/services/dados-contatos.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.page.html',
  styleUrls: ['./lista-contatos.page.scss'],
})
export class ListaContatosPage implements OnInit {
  public dadosContatos : any


  constructor(private objDados: DadosContatosService) { 
    this.dadosContatos = objDados.enviar_dados()
  }

  ngOnInit() {
  }

}
