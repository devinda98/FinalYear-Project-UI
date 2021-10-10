import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RestService } from '../rest.service';
import { UniData } from '../model/unidata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  posts : any[]

  private unidata: UniData[];

  constructor(private restService: RestService) { }
  show:boolean=true;
  ngOnInit(): void {
    this.restService.getUniversityDetails().subscribe((data: UniData[]) =>{
      this.posts = data;
    });

    
  }
  hideUni(){
    this.show=false;
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }
}

