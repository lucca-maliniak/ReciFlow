export interface GreenPoints {
  records: GreenPointsRecord[];
}

export interface GreenPointsRecord {
  BAIRRO: string;
  GEOMETRIA: string;
  HORARIO_FUNCIONAMENTO: string;
  ID_LEV: string;
  LETRA_IMOVEL: string;
  NOME_LEV: string;
  NOME_LOGRADOURO: string;
  NUMERO_IMOVEL: string;
  REF_LOCALIZACAO: string;
  REGIONAL: string;
  TIPO_LOGRADOURO: string;
  TIPO_MATERIAL_COLETADO: string;
  _id: number;
}