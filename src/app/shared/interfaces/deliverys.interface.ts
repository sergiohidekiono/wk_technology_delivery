export interface Deliverys {
  id: number;
  cliente: string;
  dataEnvio: Date;
  status: string;
  endereco: string;
  produto: string;
  dataEstimadaEntrega: Date;
  observacoes: string;
  historico: [{ data: Date; status: string }];
}
