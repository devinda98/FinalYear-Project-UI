import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent implements OnInit {

  universities : any[] = [
    {
      University1: ["NSBM","23244","2",["Computing","Business","Engineering","Law","Food Science","Multi Media"],"4Laks - 25 Laks",["Pool","Gym","Laborataries","Study Areas","Library"],"Available","Available","Avaialbe","Available"],
      University2: ["SLIT","23244","1",["Computing","Business","Engineering","Multi Media"],"4Laks - 25 Laks",["Gym","Laborataries","Study Areas","Library"],"None","Available(Limited)","Avaialbe","Available" ],
    
    },
  ]

  states: string[] = [
    'NSBM','SLIIT','ESOFT','IBM','NIBM'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
