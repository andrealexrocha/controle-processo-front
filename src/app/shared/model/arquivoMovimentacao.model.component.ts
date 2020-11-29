import { Setor } from './setor.model.component';

export class ArquivoMovimentacao {
  id: number;
  data_tramitacao: Date;
  parecer: string;
  setorOrigem: Setor;
  setorDestino: Setor;
  arquivo_id: number;
}