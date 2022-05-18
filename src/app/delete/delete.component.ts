import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() item:string |undefined
  
 @Output() oncancel= new EventEmitter()
 @Output() ondelete= new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    this.oncancel.emit()

  }
  delete(){
   this.ondelete.emit(this.item)
  }

}
