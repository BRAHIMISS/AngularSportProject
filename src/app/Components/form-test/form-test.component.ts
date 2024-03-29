import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {

  testFormulaire!:FormGroup
  tform: any={};
  constructor() { }

  ngOnInit(): void {
  }
  addForm(){
    console.log("TEST FOR SIMPLE FORM",this.tform);
  }
}
