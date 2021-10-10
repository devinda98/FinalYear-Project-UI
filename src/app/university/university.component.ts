import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {
  constructor() { }
  uniName:any

  ngOnInit(): void {

    
  }
  public executeSelectedChange = (event) => {
    console.log(event);
  }

  getUniName(uniNameValue){
    console.log(uniNameValue)
    this.uniName = uniNameValue;
  }

 
}

