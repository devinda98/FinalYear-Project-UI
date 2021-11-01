import { Component, OnInit } from '@angular/core';
import { UniData } from '../model/unidata';

@Component({
  selector: 'app-prediction-result',
  templateUrl: './prediction-result.component.html',
  styleUrls: ['./prediction-result.component.scss']
})
export class PredictionResultComponent implements OnInit {

  private unidata: UniData[];
  
  posts: UniData[]= [
   {
    university_name: "NSBM",
    local_rank: "26",
    imgurl: "https://www.maga.lk/wp-content/uploads/2018/03/4-NSBM.jpg",
    location: "Homagama",
    discription: "Matches with your details!!"
   },
   {
    university_name: "SLIIT",
    local_rank: "16",
    imgurl: "https://static.sliit.lk/wp-content/uploads/2018/03/SLIIT-malabe.jpg",
    location: "MALABE",
    discription: "Matches with your details!!"
   },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
