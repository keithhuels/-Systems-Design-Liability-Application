import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlookupComponent } from './adminlookup.component';

describe('AdminlookupComponent', () => {
  let component: AdminlookupComponent;
  let fixture: ComponentFixture<AdminlookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
