import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking PARTNER"
  cr7="ac number plz"


  loginForm=this.fb.group({
    accnumber:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    password:["",[Validators.required,Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(4)]]
  })


   constructor(private router:Router,private ds:DatabaseService,private fb:FormBuilder) { }
  

  ngOnInit(): void {
  }
  //two way bainding method
  Login(){
    var accnumber=this.loginForm.value.accnumber
    var password=this.loginForm.value.password
    if(this.loginForm.value){
    this.ds.Login(accnumber,password)
 
   .subscribe((result:any)=>{
    if (result){
      localStorage.setItem("currentaccnumber",JSON.stringify(result.currentaccnumber))
      localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
      localStorage.setItem("token",JSON.stringify(result.token))



      alert(result.Message)
      this.router.navigateByUrl("home")
    }
    },
    (result)=>{
      alert(result.error.Message )
  

   })
  }
  
     else{
       alert("invalid login")
     }  
}
}
  // tablat method
  // Login(a:any,p:any){
  //   var accnumber= a.value
  //   var password= p.value
  //   let database= this.database
  //   if(accnumber in database){
  //     if(password== database[accnumber]["password"]){
  //      alert("login succesfull")
  //     }
  //     else{
  //       alert("invalid password")
  //     }
      
  //     }
  //     else{
  //       alert("incurrect user name")
  //     }
  //   }
    
  //}

  //tow way
  // Login(accnumber:any,password:any){
  //   let database=this.database
  //   if(accnumber in database){
  //     if(password== database[accnumber]["password"]){
  //       return true
  //     }
  //     else{
  //       alert("invalid password")
  //     }
      
  //     }
  //     else{
  //       alert("incurrect user name")
  //     }
  //   }
    
  // }
  



