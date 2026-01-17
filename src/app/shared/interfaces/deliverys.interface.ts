import { Historico } from "./historico.interface";

export interface Deliverys {
  id: string;
  cliente: string;
  dataEnvio: Date;
  status: string;
  endereco: string;
  produto: string;
  dataEstimadaEntrega: Date;
  observacoes: string;
  historico: Historico[];
}
