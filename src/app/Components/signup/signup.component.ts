import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup= this.formBuilder.group(
    {
      firstName:["",[Validators.required,Validators.minLength(3)]],
      lastName:["",[Validators.required,Validators.minLength(3)]],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(3), Validators.maxLength(12)]],
      tel:["",[Validators.required]],

    })

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  signup()
  {
      console.log("the Object Signup is ", this.signupForm.value);
  }
}
