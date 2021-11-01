import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-prediction-error',
  templateUrl: './prediction-error.component.html',
  styleUrls: ['./prediction-error.component.scss']
})
export class PredictionErrorComponent implements OnInit {
  messageDisplay: string;
  isSuccess: boolean;

  constructor(public dialogRef: MatDialogRef<PredictionErrorComponent>, @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
    if (this.message === "failure") {
      this.messageDisplay = "There is no matching university With the selected tansportation methods for you according to the provided details. Please try again."
      this.isSuccess = false;
    }

  }
  close(): void {
    this.dialogRef.close();
  }


}
