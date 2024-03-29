import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  matches:any=[];
 /*matches:any=[ {id:1,scoreOne:1,scoreTwo:2,teamOne:"FCB",teamTwo:"RMA"},
                {id:2,scoreOne:2,scoreTwo:2,teamOne:"SEVIL",teamTwo:"ATLETICO"},
               {id:3,scoreOne:1,scoreTwo:4,teamOne:"VILLA",teamTwo:"ATLETICO"},
                {id:4,scoreOne:4,scoreTwo:2,teamOne:"SEV",teamTwo:"BARCA"}];

                */
  constructor(private mService: MatchService)
   {
   
   }

  ngOnInit(): void {
    this.mService.getAllMatches().subscribe((data)=>{this.matches=data;});  
 
  }

}
