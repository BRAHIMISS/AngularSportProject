import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.scss']
})
export class EditMatchComponent implements OnInit {
  matchForm!:FormGroup;
  match:any;
  
  constructor(private rte:ActivatedRoute , private tService: MatchService) { }

  ngOnInit(): void {
    let idx:any=this.rte.snapshot.paramMap.get('id');
    this.tService.getMatchById(idx).subscribe((data)=>{this.match=data;});
  }

  
  updateMatch(){
    this.tService.addMatch(this.match).subscribe((data)=>{this.match=data;});
    console.log("Updated Match",this.match);
  }

}
