import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ComparisonComponent } from '../comparison/comparison.component';
import { UniversityComponent } from '../university/university.component';
import { PredictionComponent } from '../prediction/prediction.component';
import { PredictionResultComponent } from '../prediction-result/prediction-result.component';
import { DegreeDetailsComponent } from '../degree-details/degree-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'comparison', component: ComparisonComponent},
  {path: '', redirectTo: '/comparison', pathMatch: 'full'},
  {path: 'university/:name', component: UniversityComponent},
  {path: 'degree/:name', component: DegreeDetailsComponent},
  {path: 'prediction', component: PredictionComponent},
  {path: '', redirectTo: '/prediction', pathMatch: 'full'},
  {path: 'result', component: PredictionResultComponent},
  {path: '', redirectTo: '/result', pathMatch: 'full'},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
