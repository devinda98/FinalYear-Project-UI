import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {
  secondFormGroup: any;
  constructor(private router :ActivatedRoute, private _formBuilder: FormBuilder) { }
  uniName:any
  data:any


  ngOnInit(): void {

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [null, Validators.required]
    });
    
    console.log(this.router.snapshot.params)
    this.data= this.router.snapshot.params.name;
    console.log(this.data)
  }
  public executeSelectedChange = (event) => {
    console.log(event);
  }

  //Description data
  descriptions: messageData []= [
    {
      img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9A5n1J-Wsty7oe_EXEnNfv2ErFZWNmwmyUGg9l27wawSIh4kon1VdY2oAw_b4_Hj7FcM&usqp=CAU",
      subject : "Globle Rank",
      content : "16168"
    },
    {
      img_url : "data:image/png;base64,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",
      subject : "Local Rank",
      content : "26"
    },
    {
      img_url : "data:image/png;base64,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",
      subject : "Location",
      content : "Homagama, Sri Lanka"
    },
    {
      img_url : "https://i.pinimg.com/originals/1c/6c/0d/1c6c0d91fad08db3c80296f3f2efc884.jpg",
      subject : "Contact",
      content : "0115 445 000"
    },
    {
      img_url : "data:image/png;base64,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",
      subject : "Degree Domains",
      content : "Local , Foreign "
    },
    {
      img_url : "https://previews.123rf.com/images/alex1618/alex16182002/alex1618200200021/139232644-fair-price-or-trade-color-line-icon-minimum-price-paid-for-certain-products-imported-from-developing.jpg",
      subject : "Avarage Degree Price",
      content : "5 Laks - 30 Laks "
    },
  ]

  //Facility data
  imageObject = [{
    image: 'https://www.nsbm.ac.lk/wp-content/uploads/2019/09/nsbm-facilities-library.jpg',
    thumbImage: 'https://www.nsbm.ac.lk/wp-content/uploads/2019/09/nsbm-facilities-library.jpg',
    title: 'Library'
}, {
    image: 'https://www.nsbm.ac.lk/wp-content/uploads/2019/09/04.jpg',
    thumbImage: 'https://www.nsbm.ac.lk/wp-content/uploads/2019/09/04.jpg',
    title: 'Swimming Pool'
},
{
  image: 'https://mylife84446.files.wordpress.com/2017/09/gym.jpg?w=736&h=510',
  thumbImage: 'https://mylife84446.files.wordpress.com/2017/09/gym.jpg?w=736&h=510',
  title: 'Gym'
},
{
  image: 'https://www.nsbm.ac.lk/wp-content/uploads/2019/09/sportsclub_bg.jpg',
  thumbImage: 'https://www.nsbm.ac.lk/wp-content/uploads/2019/09/sportsclub_bg.jpg',
  title: 'Sports and Clubs'
},
{
  image: 'https://www.maga.lk/wp-content/uploads/2018/03/DSC_4820.jpg',
  thumbImage: 'https://www.maga.lk/wp-content/uploads/2018/03/DSC_4820.jpg',
  title: 'Students Accommodations'
},
{
  image: 'https://www.nsbm.ac.lk/wp-content/uploads/2019/08/fac-cl.jpg',
  thumbImage: 'https://www.nsbm.ac.lk/wp-content/uploads/2019/08/fac-cl.jpg',
  title: 'Computer Labs'
},
{
  image: 'https://bravoslive.files.wordpress.com/2017/08/indoor-stadium.jpg?w=1040',
  thumbImage: 'https://bravoslive.files.wordpress.com/2017/08/indoor-stadium.jpg?w=1040',
  title: 'Indoor Playground'
}


]

//JOB data
managementJobs=["Professional Accountants","Auditors","General Business Managers",
"Travel companies and Tour operators",
"Hotels and Resorts Management",
"Event Management",
"The Airline", "Railway Travel Cruise Companies", "Passenger Services",
"Conferences and Conventions Centers",
"Tourist Offices and Ministries of Tourism",
"Food and Beverage Management",
"Concert and Theatre Venues",
"Museums and other Cultural Venues"
]

computingJobs=["Software Engineers",
"QA Engineers",
"UI/UX Developer", 
"UI Engineer", 
"System Support Engineer",
"Web Design",
"IT Management Interns", 
"Project managers"]

engJobs=["Electrical Engineering",
  "Electronics Engineering",
  "Electronic & Telecommunication Engineering",
  "Power Generation Engineering",
  "Power Distribution Engineering",
  "Robotics and Industrial Automation Engineering",
  "Embedded System & Hardware Engineering",
  "Control System Design Engineering",
  "Network Design Engineering",
  "Bio Medical Instrumentation", "Design Engineer"]

bioMedJobs = [
  "Biomedical scientist",
  "Healthcare scientist ",
  "Employment at large pharmaceutical companies ",

]
//DegreePrograms
managementdegreeData=[
 "BSc (Hons) Operations and Logistics Management - (Plymouth University - United Kingdom)", 
 "BSc in Business Management (Industrial Management) (Special) - (UGC Approved - Offered By NSBM)",
 "BSc in Business Management (Project Management) (Special) - (UGC Approved - Offered By NSBM)",
 "BSc in Business Management (Logistics Management) (Special) - (UGC Approved - Offered By NSBM)",
 "BBM (Hons) Tourism, Hospitality & Events - (UGC Approved - Offered By NSBM)",
 "BSc (Hons) Events, Tourism and Hospitality Management - (Plymouth University - United Kingdom)",
 "BSc (Hons) Marketing Management - (Plymouth University - United Kingdom)",
 "BSc (Hons) Accounting and Finance - (Plymouth University - United Kingdom)",
 "Bachelor of Business: Banking and Finance & Financial Risk Management - (Victoria University - Australia)",
 "BM (Hons) in Accounting and Finance - (UGC Approved - Offered By NSBM)", 
 "BSc (Hons) Business Communication - (Plymouth University - United Kingdom)",
 "BSc (Hons) International Management and Business - (Plymouth University - United Kingdom)",
 "BA in Business Communication - (UGC Approved - Offered By NSBM)",
 "BM (Hons) in International Business - (UGC Approved - Offered By NSBM)",
 "Bachelor of Business: Management and Innovation & Supply Chain and Logistics Management - (Victoria University - Australia)",
 "BSc in Business Management (Human Resource Management) (Special) - (UGC Approved - Offered By NSBM)"
]
computingdegreeData=[
 "BSc (Honours) in Data Science - (UGC Approved - Offered By NSBM)",
 "BSc (Hons) Computer Networks - (Plymouth University - United Kingdom)",
 "BSc (Hons) Computer Security - (Plymouth University - United Kingdom)",
 "BSc (Hons) in Computer Networks - (UGC Approved - Offered By NSBM)", 
 "BSc (Hons) Computer Science - (Plymouth University - United Kingdom)",
 "BSc (Hons) Software Engineering - (Plymouth University - United Kingdom)",
 "Bachelor of Information Technology (NBIT): Major in Web and Mobile Application Development - (Victoria University - Australia)",
 "BSc (Hons) in Computer Science - (UGC Approved - Offered By NSBM)",
 "BSc (Hons) in Software Engineering - (UGC Approved - Offered By NSBM)", 
 "BSc in Management Information Systems (Special) - (UGC Approved - Offered By NSBM)" 
]
engineeringdegreeData=[
  "Bachelor of Science Engineering Honours in Electrical and Electronic Engineering - (UGC Approved - Offered By NSBM)",
  "Bachelor of Science Engineering Honours in Computer System Engineering - (UGC Approved - Offered By NSBM)",
  "Bachelor of Science Engineering Honours in Mechatronic Engineering - (UGC Approved - Offered By NSBM)", 
  "Bachelor of Science (Hons) Quantity Surveying - (Plymouth University - United Kingdom)",
  "Bachelor of Interior Design - (UGC Approved - Offered By NSBM)",
  "BSc in Multimedia - (UGC Approved - Offered By NSBM)",
  "BA (Hons) in Interior Design - (Plymouth University - United Kingdom) "
]
biodegreeData=[
  "BSc (Honours) in Biomedical Science - (UGC Approved - Offered By NSBM)",
  "BSc (Honours) Public Health and Nutrition - (UGC Approved - Offered By NSBM)"
] 
postgradDegreeData=[
  "Postgraduate Diploma in Project Management",
  "Postgraduate Diploma In Industrial Management",
  "Postgraduate Diploma in Software Engineering",
  "Postgraduate Diploma in Computer Networks",
  "Postgraduate Diploma In Human Resource Management",
  "Postgraduate Diploma In Business Management",
  "Master of Business Studies (MBS) and Master of Business Administration (MBA) "
]
}

export class messageData{
  img_url: String
  subject: String
  content: String
}

