import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  //declaration de l'adresse du serveur Back End SpringBoot
  matchURL:string="http://localhost:8086/api/matches";
// http c'est le Livreur (Bostajiiii)
  constructor(private http : HttpClient) { }

  //Requete 1 : Add Match
  addMatch(matchobj: any)
  {
      return this.http.post(this.matchURL,matchobj);
  }
  //Req2 : Edit Match

  editMatch(newMatch:any)
  {
     return this.http.put(this.matchURL,newMatch);
  }
  //Req3 : Get All Matches
  getAllMatches()
  {
    return this.http.get(this.matchURL);
  }

  // Req4 Get Match By id
  getMatchById(id: number){
    return this.http.get(this.matchURL+'/'+id);
  }
//Req-5 
deleteMatchById(id: number)
{
  return this.http.delete(this.matchURL+'/'+id);
}
}
