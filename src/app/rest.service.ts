import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniData } from './model/unidata';

const baseUrl = 'http://localhost:8080//university'

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private httpClient: HttpClient) { }

  getUniversityDetails():Observable<UniData []>{
    return this.httpClient.get<UniData[]>(`${baseUrl}/all`);
  }

}
