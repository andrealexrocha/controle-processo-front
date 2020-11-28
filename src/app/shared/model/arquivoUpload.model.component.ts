import { Beneficio } from './beneficio.model.component';
import { ArquivoTipo } from './arquivoTipo.model.component';

export class ArquivoUpload {
  id: number;
  descricao: string;
  file: File;
  beneficioId: number;
  arquivoTipoId: number;
}