import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deliverys } from 'src/app/shared/interfaces/deliverys.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDeliverys(){
    return this.http.get<Deliverys[]>('http://localhost:3000/entregas');
  }
}
