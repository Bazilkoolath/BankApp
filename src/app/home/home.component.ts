import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:any
  accnumber:any

  depositForm=this.fb.group({
    accnumber:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    password:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    amount:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })

  withdrawForm=this.fb.group({
    accnumber1:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    password1:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    amount1:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })
date:any


  constructor(private ds:DatabaseService , private fb:FormBuilder,private router:Router) { 
    this.username=JSON.parse(localStorage.getItem('currentaccnumber')||'')
    this.date=new Date()

  }

  ngOnInit(): void {
    // if(!localStorage.getItem("currentaccnumber")){
    //   alert("plz login")
    //   this.router.navigateByUrl("")
    // }
  }
  deposit(){
    
    var accnumber=this.depositForm.value.accnumber
    var password=this.depositForm.value.password
    var amount=this.depositForm.value.amount
    if(this.depositForm.valid){
      this.ds.deposit(accnumber,password,amount)
      .subscribe((result:any)=>{
        if(result){
          alert(result.Message)
        }

      },
      (result)=>{
        alert(result.error.Message);
        
      }
      )
     } 
     
     else{
       alert("amount didn't deposited")

      
      
    }



  }
  withdraw(){
    var accnumber=this.withdrawForm.value.accnumber1
    var password=this.withdrawForm.value.password1
    var amount=this.withdrawForm.value.amount1
    if(this.withdrawForm.valid){
      this.ds.withdraw(accnumber,password,amount)
      .subscribe((result:any)=>{

        if(result){
          alert(result.Message)
        }

      },
      (result)=>{
        alert(result.error.Message);
        
      }
      )
     } 
    }



    deleteFunction(){
      this.accnumber=JSON.parse( localStorage.getItem("currentaccnumber")||"")
    }
    logout(){
      localStorage.removeItem("currentaccnumber")
      localStorage.removeItem("currentUser")
      this.router.navigateByUrl("")

    }
    oncancel(){
      this.accnumber =""
    }
    ondelete(event:any){
this.ds.ondelete(event)
      .subscribe((result:any)=>{
        if(result){
          alert(result.Message)
          this.router.navigateByUrl("")
        }

      },
      (result)=>{
        alert(result.error.Message);
        
      }
      )    }


}
