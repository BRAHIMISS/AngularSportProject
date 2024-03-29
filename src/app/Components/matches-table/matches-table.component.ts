import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.scss'],
  
})
export class MatchesTableComponent implements OnInit {
  matchesTab:any=[];
  /*
  matchesTab:any=[{id:1,scoreOne:1,scoreTwo:2,teamOne:"FCB",teamTwo:"RMA"},
                  {id:2,scoreOne:5,scoreTwo:2,teamOne:"SEVIL",teamTwo:"ATLETICO"},
                  {id:3,scoreOne:3,scoreTwo:2,teamOne:"VILLA",teamTwo:"ATLETICO"},
                  {id:4,scoreOne:4,scoreTwo:2,teamOne:"SEV",teamTwo:"BARCA"}];
  */
  constructor(private mService:MatchService) { }

  ngOnInit(): void {
      this.mService.getAllMatches().subscribe((data)=>{this.matchesTab=data;console.log("All Matches",data);});
  }
  
  displayMatch(id:number){
    alert("Id: "+id);
  }
  editMatch(t:number){
    alert("Id: "+t);

  }
  deleteMatch(y:number){
    this.mService.deleteMatchById(y).subscribe((data)=>{console.log("We Delete the Match : ",data);this.ngOnInit();
  });
   // alert("Id: "+y);

  }
}
