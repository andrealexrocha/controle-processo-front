import { Beneficio } from './beneficio.model.component';
import { ArquivoTipo } from './arquivoTipo.model.component';

export class Arquivo {
  id: number;
  name: string;
  type: string;
  size: number;
  file: File;
  beneficio: Beneficio;
  arquivoTipo: ArquivoTipo;
}