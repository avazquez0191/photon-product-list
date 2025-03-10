import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: StartPageComponent;
  let fixture: ComponentFixture<StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'photon-app' title`, () => {
    const fixture = TestBed.createComponent(StartPageComponent);
    const app = fixture.componentInstance;
    expect(app.gender).toEqual('gender');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StartPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Products List');
  });
});
