import { TestBed } from '@angular/core/testing';
import { PlantaService } from './planta.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Planta } from '../modelo/planta';
import { environment } from '../../environments/environment.development';

describe('PlantaService', () => {
  let service: PlantaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService]
    });
    service = TestBed.inject(PlantaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('obtener la lista de plantas', () => {
    const plantasMock: Planta[] = [
      new Planta(1, 'Planta 1', 'Planta Científica 1', 'Interior', 2.5, 'Templado', 'Tierra'),
      new Planta(2, 'Planta 2', 'Planta Científica 2', 'Exterior', 3.0, 'Frío', 'Arena')
    ];

    service.getPlantas().subscribe((plantas) => {
      expect(plantas.length).toBe(2);
      expect(plantas).toEqual(plantasMock);
    });

    const req = httpMock.expectOne(environment.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(plantasMock); // Respuesta simulada
  });
});