import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.scss']
})
export class TeamsTableComponent implements OnInit {

  teamsTab:any=[];
  /*teamsTab:any=[{id:1,name:"FCB",owner:"FCB",foundation:1920},
                {id:2,name:"RMA",owner:"RMA",foundation:1920},
                {id:3,name:"VAL",owner:"VAL",foundation:1920}]
*/
  constructor(private tService:TeamService) { }

  ngOnInit(): void {
    this.tService.getAllTeams().subscribe((data)=>{this.teamsTab=data;console.log("All Teams: ",data);});
  }

  displayTeam(id:number){
   // alert("ID : "+id);
  }
  editTeam(x:number){
  //  alert("ID : "+x);
  }
  deleteTeam(y:number){
   this.tService.deleteTeamById(y).subscribe((resp)=>{console.log("Deleted Team : ",resp);this.ngOnInit();});
   //alert("ID : "+y);
  
  }
}
