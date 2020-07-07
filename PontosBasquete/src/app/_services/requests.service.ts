import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Partida } from '../Entities/Partida';

@Injectable({
    providedIn: 'root'
})
export class RequestsService {
    obj: Partida[];
    constructor(public http: HttpClient) { }

    public GetPartidas(): Partida[]{
        let result = this.http.get<Partida[]>('https://localhost:44358/getpartidas'); 
        result.subscribe(dados => this.obj = dados);
        console.log(this.obj[0].Dia);
        
        return this.obj;
    }
    
    public SetPartida(partida : Partida){
        this.http.post('https://localhost:44358/postpartida', partida, {headers: {'Content-Type':'application/json; charset=utf-8'}});
    }
}
