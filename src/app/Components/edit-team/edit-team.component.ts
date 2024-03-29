import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

  teamForm!:FormGroup;
  team:any;

  constructor(private route: ActivatedRoute, private tService:TeamService) { }
  ngOnInit(): void {
  
    //***we add this line to extract the ID from URL using ActivatedRoute Module */
    let idx :any = this.route.snapshot.paramMap.get('id');
    console.log("***Team ID id : ",idx);
    this.tService.getTeamById(idx).subscribe((data)=>{this.team=data});
  }
  updateTeam(){
    this.tService.editTeam(this.team).subscribe((data)=>{console.log("UPDATED TEAM: ",data)})
  }
}
