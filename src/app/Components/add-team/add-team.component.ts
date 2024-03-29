import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {


  teamForm!:FormGroup;
  constructor(private tService:TeamService) { }
  team:any={}
  ngOnInit(): void {
  }
  addTeam(){

    this.tService.addTeam(this.team).subscribe((resp)=>{console.log("TEAMS ADDed:",resp)});
  }
}
