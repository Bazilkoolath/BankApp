import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking PARTNER"
  cr7="ac number thada"
  accnumber=""
  password=""

  database={
    1001:{accnumber:1001,name:"bazil",password:1001,balance:5000},
    1002:{accnumber:1002,name:"faz",password:1002,balance:7000},
    1003:{accnumber:1003,name:"unni",password:1003,balance:1000}

  }
  constructor() { }
  

  ngOnInit(): void {
  }
  acnochange(event:any){
    console.log(event.target.value);
    this.accnumber=event.target.value
    

  }
  passwordchange(event:any){
    console.log(event.target.value);
    this.password=event.target.value
    
    
  }
  Login(){
    alert("login clicked")
  }

}
