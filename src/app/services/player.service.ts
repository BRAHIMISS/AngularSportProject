import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL:string="http://localhost:8086/api/players";

  constructor(private http: HttpClient) { }

  //Ajout des Requets (Post,get,put, delete) Fonction 
  // Request-1 pour ajouter un player
  addPlayerx(playerObj : any)
  {
    return this.http.post(this.playerURL,playerObj);
  }
  //Request-2 to get all players
  getAllPlayerx(){
    return this.http.get(this.playerURL);
  }

  // Request-3 to edit/modify one Player 
  editPlayerx(newPlayer:any){
    return this.http.put(this.playerURL,newPlayer);
  }
  //Request-4 to get Player by Id
  getPlayerxById (id : number){
    return this.http.get(this.playerURL+"/"+id);

  }
   //Request-5 to delete a player using it's Id
  deletePlayerxById(id:number){
      return this.http.delete(this.playerURL+"/"+id);
  }

}
