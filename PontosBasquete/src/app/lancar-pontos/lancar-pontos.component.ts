import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RequestsService } from '../_services/requests.service'
import { Partida } from '../Entities/Partida';

@Component({
  selector: 'app-lancar-pontos',
  templateUrl: './lancar-pontos.component.html',
  styleUrls: ['./lancar-pontos.component.css']
})
export class LancarPontosComponent implements OnInit {
  constructor(public req: RequestsService) { }

  @ViewChild('Data') Data: ElementRef;
  @ViewChild('Pontos') Pontos: ElementRef;
  
  sendPontos(){
      let part: Partida;
      part.Dia = this.Data.nativeElement.value;
      part.Pontos = this.Pontos.nativeElement.value;
      this.req.SetPartida(part);
  }

  ngOnInit(): void {
      
  }

  

}
