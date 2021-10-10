import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {
  constructor(private router :ActivatedRoute) { }
  uniName:any
  data:any

  ngOnInit(): void {
    console.log(this.router.snapshot.params)
    this.data= this.router.snapshot.params.name;
    console.log(this.data)
  }
  public executeSelectedChange = (event) => {
    console.log(event);
  }

 
 
}

