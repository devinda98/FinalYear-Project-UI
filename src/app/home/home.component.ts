import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  posts : any[] = [
   {
     UniversityName: 'NSBM',
     UniversityRank: "1",
     UniversityimageUrl: "https://www.vippng.com/png/detail/178-1787918_nsbm-green-university-logo.png",
     location :"Homagama"
   },
   {
    UniversityName: 'SLIIT',
    UniversityRank: "2",
    UniversityimageUrl: "https://www.onlanka.com/wp-content/uploads/2018/09/sliit-logo.jpg",
    location :"Malabe"
  },
  {
    UniversityName: 'ESOFT',
    UniversityRank: "8",
    UniversityimageUrl: "https://www.degree.lk/wp-content/uploads/2020/12/22290079_1150438951756171_2195516595857142789_o.jpg",
    location :"Colombo"
  },
  {
    UniversityName: 'IBM',
    UniversityRank: "14",
    UniversityimageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg",
    location :"Colombo"
  },
  {
    UniversityName: 'SLTC',
    UniversityRank: "6",
    UniversityimageUrl: "http://s3.amazonaws.com/bizenglish/wp-content/uploads/2020/01/28120021/SLTC-logo1.jpg",
    location :"Colombo"
  },
  {
    UniversityName: 'APIIT',
    UniversityRank: "12",
    UniversityimageUrl: "data:image/png;base64,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",
    location :"Colombo"
  },
  {
    UniversityName: 'ICBT',
    UniversityRank: "9",
    UniversityimageUrl: "https://icbt.lk/wp-content/uploads/2019/02/icbt-fb.png",
    location :"Colombo"
  },
  {
    UniversityName: 'CIPM',
    UniversityRank: "18",
    UniversityimageUrl: "https://www.cipmlk.org/wp-content/uploads/2018/10/favicon-logo.png",
    location :"Kandy"
  },
  {
    UniversityName: 'Saegis Campus',
    UniversityRank: "20",
    UniversityimageUrl: "https://www.course.lk/uploads/institute/63/saegis-campus.jpg",
    location :"Nugegoda"
  },
  
  ];

  constructor() { }
  show:boolean=true;
  ngOnInit(): void {
    
  }
  hideUni(){
    this.show=false;
  }
  Test(uniName){
    console.log(uniName)
   
  }
  
  public executeSelectedChange = (event) => {
    console.log(event);
  }
}

