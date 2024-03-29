import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiv-form',
  templateUrl: './reactiv-form.component.html',
  styleUrls: ['./reactiv-form.component.scss']
})
export class ReactivFormComponent implements OnInit {
  
  //*** App HERO TEST  */
hero ={
  name:'HEROS--',
  power:100,
  //avatar:''
  avatar:'https://media.istockphoto.com/id/1530231430/photo/hand-holding-tree-with-co2-white-fog-on-top-reduce-co2-emissions-to-limit-climate-change-and.jpg?s=612x612&w=0&k=20&c=HKCaRwoVW7L76J0Ajj-gLJnKyGzlszYEPfQx2uVnnE8='

}
heros:any[]=[];
  //*** END App HERO TEST  */

   
  //signupForm:FormGroup= this.formBuilder.group(

  formStatic!:FormGroup;

  reactivForms:FormGroup= this.formBuilder.group(
    {
      nom:["",[Validators.required,Validators.minLength(4)]],
      pren:["",[Validators.required,Validators.maxLength(8)]],
      year:["",[Validators.required,Validators.maxLength(4)]],
      emails:["",[Validators.required]]
    }
  )
  // Add a private variable "formBuilder" in the constructor 
  constructor(private formBuilder:FormBuilder) { }
  tStatic:any={}
  //START interpolation test
  user:any={
              name:'MISSAOUI',
              age:40,
              image:'https://www.sport-protech.com/guide/wp-content/uploads/preparation-phyisque-basket-870x500.jpg'
             
            }
myName='';
//END Interpolation Test

  ngOnInit(): void {
  }
  reactiveform() 
  {
      console.log("REACTIVE FORM Test Okay : ", this.reactivForms.value); 
  }

  tStaticMethod(){
    console.log("STATIC FORM Data : ", this.tStatic);
  }

  modifyMethod(){
    this.user.name=this.myName;
  }

  addHero(){
    this.heros.push(this.hero);
    console.log("HERO IS :  ",this.hero);
    this.hero=
    {
      name:'HEROS-',
      power:0,
      avatar:'https://sport.tunisienumerique.com/wp-content/uploads/2021/11/baskktproax.jpg'
     }
    }
}
