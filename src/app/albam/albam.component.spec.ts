import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbamComponent } from './albam.component';

describe('AlbamComponent', () => {
  let component: AlbamComponent;
  let fixture: ComponentFixture<AlbamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
