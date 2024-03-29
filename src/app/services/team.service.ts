import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamURL:string="http://localhost:8086/api/teams";

  constructor(private http:HttpClient) { }

  // Requests Declaration Get/Post/Put/Delete 

  //Request-1 to Add an New Team 
  addTeam(teamObj: any){
      return this.http.post(this.teamURL,teamObj);
  }
//Request-2 to Get All Team 
getAllTeams(){
  return this.http.get(this.teamURL);
}

//Reequest-3 to edit a Team 
editTeam(newTeam:any){
  return this.http.put(this.teamURL,newTeam);
}

//Request-4 to Find a team by Id
getTeamById(id: number){
  return this.http.get(this.teamURL+"/"+id);

}

//Request-5 to Delete a Team By Id
deleteTeamById(id: number){
  return this.http.delete(this.teamURL+"/"+id);
}

}
