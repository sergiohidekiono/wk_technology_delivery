import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deliverys } from 'src/app/shared/interfaces/deliverys.interface';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  // url: string = 'http://localhost:3000/entregas/'; //usando json server
  url: string = 'https://ywppglpzufueccruandu.supabase.co/rest/v1/entregas';

  headers = new HttpHeaders({
    apikey: 'sb_publishable_5gIqbnJoA6MlQ9zrj9KI4g_-OiRGDFF',
    Authorization: 'Bearer sb_publishable_5gIqbnJoA6MlQ9zrj9KI4g_-OiRGDFF',
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getDeliverys() {
    return this.http.get<Deliverys[]>(this.url, { headers: this.headers });
  }

  getDeliveryById(id: string) {
    return this.http.get<Deliverys>(`${this.url}?id=eq.${id}`, {
      headers: this.headers,
    });
  }

  postNewDelivery(data: Deliverys) {
    return this.http.post<Deliverys[]>(this.url, data, {
      headers: this.headers,
    });
  }

  updateDelivery(data: Deliverys) {
    return this.http.put(`${this.url}?id=eq.${data.id}`, data, {
      headers: this.headers,
    });
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
