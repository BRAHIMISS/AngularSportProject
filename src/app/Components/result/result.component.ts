import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
//Communication entre deux Components Différents (Parent)--> Child 
  @Input() obj:any={}
  constructor() { }

  ngOnInit(): void {
  }

  scoreColor(a:number,b:number)
  {
      if(a>b) {return "green";}
      else if(a<b){return "red";}
      else {return "blue";}
  }
  scoreResult(a:number,b:number)
  {
      if(a>b) {return "win";}
      else if(a<b){return "lose";}
      else {return "drow";}
  }



}
