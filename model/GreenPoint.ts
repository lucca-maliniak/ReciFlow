export interface GreenPoints {
  records: GreenPointsRecord[];
}

export interface GreenPointsRecord {
  bairro: string;
  geometria: string;
  horario_funcionamento: string;
  id_lev: string;
  letra_imovel: string;
  nome_lev: string;
  nome_logradouro: string;
  numero_imovel: string;
  ref_localizacao: string;
  regional: string;
  tipo_logradouro: string;
  tipo_material_coletado: string;
  _id: number;
}