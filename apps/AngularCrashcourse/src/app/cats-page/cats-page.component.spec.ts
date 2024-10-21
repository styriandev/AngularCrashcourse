import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatsPageComponent } from './cats-page.component';

describe('CatsPageComponent', () => {
  let component: CatsPageComponent;
  let fixture: ComponentFixture<CatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
