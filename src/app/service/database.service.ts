import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  currentUser:any
  currentaccnumber:any

  database:any={
    1001:{accnumber:1001,user:"bazil",password:1001,balance:5000,transaction:[]},
    1002:{accnumber:1002,user:"faz",password:1002,balance:7000,transaction:[]},
    1003:{accnumber:1003,user:"unni",password:1003,balance:1000,transaction:[]},
    1004:{accnumber:1004,user:"shemi",password:1004,balance:1500,transaction:[]}


  }
  //local storage

  constructor(private http:HttpClient) {
    this.getDetails()
   }
   saveDetails(){
    localStorage.setItem("database",JSON.stringify(this.database))
    if(this.currentaccnumber){
      localStorage.setItem("currentaccnumber",JSON.stringify(this.currentaccnumber))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }
  //to het data from local storage
  getDetails(){
    if(localStorage.getItem("database")){
      this.database=JSON.parse(localStorage.getItem("database")||'')
    }
    if(localStorage.getItem("currentaccnumber")){
      this.currentaccnumber=JSON.parse(localStorage.getItem("currentaccnumber")||'')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }
  }




  register(user:any,accnumber:any,password:any){
    const data={
      user,
      accnumber,
      password
    }

   return this.http.post('http://localhost:3000/register',data)


  }
  Login(accnumber:any,password:any){
    const data={
      accnumber,
      password
    }

    return this.http.post('http://localhost:3000/Login',data)
    }





    deposit(accnumber:any,password:any,amount:any){
      const data={
        accnumber,
        password,
        amount
      }
  
      return this.http.post('http://localhost:3000/deposit',data,this.getOption())
    
    
    }
    getOption(){
      const token =JSON.parse(localStorage.getItem("token")||'')
      let headers=new HttpHeaders()

      if (token){
        headers=headers.append('token',token)
        options.headers=headers
      }
      return options
    }


    

    withdraw(accnumber:any,password:any,amount:any){

      const data={
        accnumber,
        password,
        amount
      }
  
      return this.http.post('http://localhost:3000/withdraw',data,this.getOption())
    
    }

    transaction(accnumber:any){
      const data={
        accnumber
      }
  
      return this.http.post('http://localhost:3000/transaction',data,this.getOption())
        }

        ondelete(accnumber:any){

          return this.http.delete('http://localhost:3000/ondelete/'+accnumber,this.getOption())


        }
    
    
}

