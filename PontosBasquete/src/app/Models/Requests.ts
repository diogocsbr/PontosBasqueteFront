import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Partida } from '../Entities/Partida';

export class Request{
    constructor(public http: HttpClient){
        
    }
    
    public GetPartidas(): Partida[]{
        let result = this.http.get<Partida[]>('https://localhost:44358/getpartidas', {headers: {'Content-Type':'application/json; charset=utf-8'}}); 
        let obj;
        result.subscribe(p => obj = p);
        return obj;
    }

    public SetPartida(partida : Partida){
         this.http.post('https://localhost:44358/postpartida', partida, {headers: {'Content-Type':'application/json; charset=utf-8'}});
    }

}