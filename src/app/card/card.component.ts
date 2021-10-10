import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input()
  data: UniData;
  @Output() sendUniName = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

   Test(uniName){
    this.sendUniName.emit(uniName);
   // console.log(uniName)
   
  }

}
export interface UniData{
  UniversityName: string;
  UniversityRank: string;
  UniversityimageUrl: string;
  location: string;
}
