import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  data: CompareData;
  constructor() { }

  ngOnInit(): void {
  }

}
export interface CompareData{
  University1: string;
  University2: string;
  // UniversityName2: string;
  // UniversityRank2: string;
}


