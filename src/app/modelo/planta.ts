export class Planta {
    id: number; 
    nombre_comun: string;  
    nombre_cientifico: string; 
    tipo: string; 
    alturaMaxima: number; 
    clima: string;    
    sustratoSiembra: string; 
  
    public constructor(id: number, nombre_comun: string, nombre_cientifico: string, tipo: string, alturaMaxima: number, clima: string, sustratoSiembra: string) {
      this.id = id;
      this.nombre_comun = nombre_comun;
      this.nombre_cientifico = nombre_cientifico;
      this.tipo = tipo;
      this.alturaMaxima = alturaMaxima;
      this.clima = clima;
      this.sustratoSiembra = sustratoSiembra;
    }
  }