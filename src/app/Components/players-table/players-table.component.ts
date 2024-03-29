import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.scss']
})
export class PlayersTableComponent implements OnInit {

  playersTab:any=[];
  /*playersTab:any=[{id:1,name:"Christ",age:25,position:"RMA",nbre:"07"},
                  {id:2,name:"MESSI",age:30,position:"RMA",nbre:"10"},
                  {id:3,name:"FIGO",age:30,position:"FCB",nbre:"07"}];
  */
 
  constructor(private pService:PlayerService) { }

  ngOnInit(): void {
      this.pService.getAllPlayerx().subscribe((data)=>{this.playersTab=data;});

  }
  displayPlayer(i:number){alert ("ID: " +i);}
  editPlayer(x:number){alert ("ID: " +x);}
  deletePlayer(y:number){
    this.pService.deletePlayerxById(y).subscribe((data)=>{console.log("Deleted Player:",y);
    this.ngOnInit();
  });
    alert ("ID: " +y);}
}
