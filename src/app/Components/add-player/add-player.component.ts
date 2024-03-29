import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  playerForm!:FormGroup;
  player:any={}
  constructor(private pService: PlayerService) { }

  ngOnInit(): void {
  }
  addPlayer(){
    console.log("Player: ",this.player);
    this.pService.addPlayerx(this.player).subscribe(
      (respon)=>{console.log("PLAYER ADDED is : ",respon);});
      //(resp)=>{console.log("Here is the Response from Service",resp);});



  }
}
