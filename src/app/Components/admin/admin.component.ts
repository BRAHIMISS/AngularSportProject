import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  //declaration de la variavle 'actualDate' pour tester La Notion de PIPE '|'
  actualDate:Date=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
