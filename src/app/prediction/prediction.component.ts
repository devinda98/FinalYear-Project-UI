import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninethFormGroup: FormGroup;
  tenthFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { 
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['1']
    // })
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [null, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [null, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: [null, Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: [null, Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: [null, Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: [null, Validators.required]
    });
    this.seventhFormGroup = this._formBuilder.group({
     seventhCtrl: [null, Validators.required]
    });
    this.eighthFormGroup = this._formBuilder.group({
      eighthCtrl: [null, Validators.required]
    });
    this.ninethFormGroup = this._formBuilder.group({
      ninethCtrl: [null, Validators.required]
    });
    this.tenthFormGroup = this._formBuilder.group({
      tenthCtrl: [null, Validators.required]
    });
  }

}
