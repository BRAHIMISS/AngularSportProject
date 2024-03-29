import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  playerForm!:FormGroup;
  player:any;
  idx:any;
  constructor(private pService:PlayerService, private rte : ActivatedRoute ) { }

  ngOnInit(): void {
    this.idx=this.rte.snapshot.paramMap.get('id');
    this.pService.getPlayerxById(this.idx).subscribe((data)=>{this.player=data;console.log("Player ID is : ",this.player);})
      }

  updatePlayer(){
    this.pService.editPlayerx(this.player).subscribe((data)=>{console.log("Updated PLAYER: ",this.player)});

  }


}
