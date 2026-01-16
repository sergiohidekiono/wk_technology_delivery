import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deliverys } from 'src/app/shared/interfaces/deliverys.interface';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private http: HttpClient) {}

  getDeliverys(){
    return this.http.get<Deliverys[]>('http://localhost:3000/entregas');
  }

  postNewDelivery(data: Deliverys){
    return this.http.post<Deliverys[]>('http://localhost:3000/entregas', data);
  }
}
