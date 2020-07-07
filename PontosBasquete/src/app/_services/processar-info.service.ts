import { Injectable } from '@angular/core';
import { Partida } from '../Entities/Partida';

@Injectable({
  providedIn: 'root'
})
export class ProcessarInfoService {

    constructor() { }

    public GetMenorDia(partidas : Partida[]): Date{
      let menor = partidas[0].Dia;
      partidas.forEach(element => {
          if(menor < element.Dia)
              menor = element.Dia;
      });
      return menor;
    }

    public GetMaiorDia(partidas : Partida[]): Date{
        let maior = partidas[0].Dia;
        partidas.forEach(element => {
            if(maior > element.Dia)
                maior = element.Dia;
        });
        return maior;
    }

    public GetNumJogosDisputados(partidas : Partida[]): number{
        return partidas.length;
    }

    public GetTotalPontos(partidas : Partida[]): number{
        let pontos = 0;
        partidas.forEach(element => {
            pontos = pontos + element.Pontos;
        });
        return pontos;
    }

    public GetMediaPontos(partidas: Partida[]): number{
        return this.GetTotalPontos(partidas) / this.GetNumJogosDisputados(partidas);
    }

    public GetMenorPontuacao(partidas : Partida[]): number{
        let menor = partidas[0].Pontos;
        partidas.forEach(element => {
            if(menor < element.Pontos)
                menor = element.Pontos;
        });
        return menor;
    }

    public GetMaiorPontuacao(partidas : Partida[]): number{
        let maior = partidas[0].Pontos;
        partidas.forEach(element => {
            if(maior > element.Pontos)
                maior = element.Pontos;
        });
        return maior;
    }

    public GetQtdBateuRecorde(partidas : Partida[]): number{
        let maior = 0;
        partidas.forEach(element => {
            if(element.Pontos > maior)
                maior = element.Pontos;
        });
        return maior;
    }
}
