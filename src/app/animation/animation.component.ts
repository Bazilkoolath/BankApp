import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('openclose',[
      state('open',style({
        height:'50px',
        backgroundColor:'red'
      })),
      state('close',style({
        height:'100px',
        backgroundColor:'black'
      })),
      transition('open=>close',[
        animate('7s')
      ]),
      
      transition('close=>open',[
        animate('7s')
    ])
  ])
  ]
})
export class AnimationComponent implements OnInit {

  
  isopen=true
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isopen=!this.isopen
  }

}
