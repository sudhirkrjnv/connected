import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondrightpanel } from './secondrightpanel';

describe('Secondrightpanel', () => {
  let component: Secondrightpanel;
  let fixture: ComponentFixture<Secondrightpanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secondrightpanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondrightpanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
