import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deliverys } from 'src/app/shared/interfaces/deliverys.interface';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private http: HttpClient) {}

  getDeliverys() {
    return this.http.get<Deliverys[]>('http://localhost:3000/entregas');
  }

  getDeliveryById(id: string) {
    return this.http.get<Deliverys>(`http://localhost:3000/entregas/${id}`);
  }

  postNewDelivery(data: Deliverys) {
    return this.http.post<Deliverys[]>('http://localhost:3000/entregas', data);
  }

  updateDelivery(data: Deliverys) {
    return this.http.put<Deliverys>(
      `http://localhost:3000/entregas/${data.id}`,
      data,
    );
  }

  getStatuses() {
    return [
      { label: 'Pendente', value: 'Pendente' },
      { label: 'Em Rota', value: 'Em Rota' },
      { label: 'Entregue', value: 'Entregue' },
      { label: 'Cancelada', value: 'Cancelada' },
    ];
  }
}
