import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantaComponent } from './planta.component';
import { PlantaService } from './planta.service';
import { of } from 'rxjs';
import { Planta } from '../modelo/planta';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('PlantaComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;
  let plantaServiceSpy: jasmine.SpyObj<PlantaService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PlantaService', ['getPlantas']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlantaComponent],
      providers: [
        { provide: PlantaService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;
    plantaServiceSpy = TestBed.inject(PlantaService) as jasmine.SpyObj<PlantaService>;
  });

  it('calcular totalInterior y totalExterior', () => {
    const plantasMock: Planta[] = [
      new Planta(1, 'Planta 1', 'Planta 1', 'Interior', 2.5, 'Templado', 'Tierra'),
      new Planta(2, 'Planta 2', 'Planta 2', 'Exterior', 3.0, 'Frío', 'Arena'),
      new Planta(3, 'Planta 3', 'Planta 3', 'Interior', 1.2, 'Cálido', 'Arcilla')
    ];

    plantaServiceSpy.getPlantas.and.returnValue(of(plantasMock));

    fixture.detectChanges(); // Ejecuta ngOnInit()

    expect(component.totalInterior).toBe(2);
    expect(component.totalExterior).toBe(1);
  });

  it('renderizar 3 filas de plantas más el encabezado', () => {
    const plantasMock: Planta[] = [
      new Planta(1, 'Planta 1', 'Planta Científica 1', 'Interior', 2.5, 'Templado', 'Tierra'),
      new Planta(2, 'Planta 2', 'Planta Científica 2', 'Exterior', 3.0, 'Frío', 'Arena'),
      new Planta(3, 'Planta 3', 'Planta Científica 3', 'Interior', 1.2, 'Cálido', 'Arcilla')
    ];

    plantaServiceSpy.getPlantas.and.returnValue(of(plantasMock));

    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));

    expect(tableRows.length).toBe(3);
  });
});