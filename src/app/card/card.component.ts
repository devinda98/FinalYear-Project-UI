import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { UniData } from '../model/unidata';

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

}

