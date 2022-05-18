import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transaction:any
  accnumber:any

  constructor(private ds:DatabaseService) {
    
    this.accnumber=JSON.parse(localStorage.getItem("currentaccnumber")||'')
    this.ds.transaction(this.accnumber)
    .subscribe((result:any)=>{
      if(result){

        this.transaction=result.transaction
      }

    },
    (result)=>{
      alert(result.error.Message);
      
    })
    console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
