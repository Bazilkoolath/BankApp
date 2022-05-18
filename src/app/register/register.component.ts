import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // register form model
  registerForm=this.fb.group({
    user:["",[Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3)]],
    accnumber:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    password:["",[Validators.required,Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(4)]]
  })

  constructor(private ds:DatabaseService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {

  }
   
  register(){
      



    var accnumber=this.registerForm.value.accnumber
    var password=this.registerForm.value.password
    var user=this.registerForm.value.user
    if(this.registerForm.valid){
    this.ds.register(user,accnumber,password)
   .subscribe((result:any)=>{
    if (result){
      alert(result.Message)
      this.router.navigateByUrl("")
    }
    },
    (result)=>{
      alert(result.error.Message )
  

   })
  
  
    }
    else{
      alert("invalid form")
    }
  
  }
}
