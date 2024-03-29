import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup=this.formBuilder.group(
    {
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(3), Validators.maxLength(12)]]
    }
  )
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
