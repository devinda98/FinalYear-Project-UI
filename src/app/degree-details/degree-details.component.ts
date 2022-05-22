import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { messageData } from '../university/university.component';

@Component({
  selector: 'app-degree-details',
  templateUrl: './degree-details.component.html',
  styleUrls: ['./degree-details.component.scss']
})
export class DegreeDetailsComponent implements OnInit {

data:any;

  constructor(private router :ActivatedRoute) { }

  ngOnInit(): void {

    this.data= this.router.snapshot.params.name;
    console.log(this.data)
    
  }
  descriptions: messageData []= [
    {
      img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRds5ONn5TZbfFNIJlYYboSMK_wsCarb8he8J-tQGAVLpKrkEgq2iKTPZlr22-R6PfgEFA&usqp=CAU",
      subject : "Duration",
      content : "4 Years"
    },
    {
      img_url : "https://www.pngitem.com/pimgs/m/197-1973871_materials-and-methods-icon-hd-png-download.png",
      subject : "Degree Type",
      content : "Full Time"
    },
    {
      img_url : "https://thumbs.dreamstime.com/b/study-time-vector-glyph-color-icon-study-time-icon-website-design-desktop-envelopment-development-premium-pack-167807020.jpg",
      subject : "Entry Qualifications",
      content : "Six passes (with 3 credit passes) in GCE Ordinary Level and Three Passes in GCE Advance Level in a single sitting, in the respective streams stipulated or approved by UGC"
    },
    {
      img_url : "https://previews.123rf.com/images/alex1618/alex16182002/alex1618200200021/139232644-fair-price-or-trade-color-line-icon-minimum-price-paid-for-certain-products-imported-from-developing.jpg",
      subject : "Course Fee",
      content : "LKR 1,800,000"
    },
    {
      img_url : "https://www.nicepng.com/png/detail/335-3355144_seller-registration-icon-class-register-icon-png.png",
      subject : "Registration Fee",
      content : "LKR 10,000"
    },
    {
      img_url : "https://cdn-icons-png.flaticon.com/512/306/306424.png",
      subject : "Employeement Opportunities",
      content : "Software Engineer, Business Analyst, Quality Assurance Engineer, UI Engineer, System Support Engineer, Web Design, IT Management Interns, Project managers"
    },
  ]
}
