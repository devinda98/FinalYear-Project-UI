import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { CardComponent } from './card/card.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { TableComponent } from './table/table.component';
import { UniversityComponent } from './university/university.component';
import { HttpClientModule } from '@angular/common/http';
import { PredictionComponent } from './prediction/prediction.component';
import { PredictionResultComponent } from './prediction-result/prediction-result.component';
import { PredictionErrorComponent } from './prediction-error/prediction-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    LayoutComponent,
    CardComponent,
    ComparisonComponent,
    TableComponent,
    UniversityComponent,
    PredictionComponent,
    PredictionResultComponent,
    PredictionErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RoutingModule,
    MatSidenavModule,
    MatTabsModule,
    MatMenuModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
