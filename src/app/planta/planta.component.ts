import { Component, OnInit } from '@angular/core';
import { Planta } from '../modelo/planta';
import { PlantaService } from './planta.service';

@Component({
  selector: 'app-planta',
  standalone: false,
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {
  plantas: Array<Planta> = [];
  
  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.getPlantas();
  }

  totalInterior: number = 0;
  totalExterior: number = 0;
  getPlantas() {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.totalInterior = this.plantas.filter(planta => planta.tipo.toLowerCase() === 'interior').length;
      this.totalExterior = this.plantas.filter(planta => planta.tipo.toLowerCase() === 'exterior').length;
    });
  }

}
