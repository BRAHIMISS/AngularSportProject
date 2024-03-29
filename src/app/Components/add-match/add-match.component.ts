import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss']
})
export class AddMatchComponent implements OnInit {
  
  matchForm!:FormGroup;
  match:any={}
  
  //Creation d'une instance du service mService
  constructor(private mService:MatchService) { }

  ngOnInit(): void {

  }
  addMatch(){
    console.log("Match To Add : ",this.match);
    // suscribe est pour récuperer la réponse du service BackEnd avec utisation de la Notion Arrow Function ()=>{}
    this.mService.addMatch(this.match).subscribe( 
        (resp)=>{console.log("Here is the Response from Service",resp);});
        this.match.ngOnInit();
  }
}
