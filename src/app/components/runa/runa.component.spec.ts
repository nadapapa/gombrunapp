/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RunaComponent } from './runa.component';
import { NumberComponent } from '../number/number.component';
import { TextComponent } from '../text/text.component';

describe('RunaComponent', () => {
  let component: RunaComponent;
  let fixture: ComponentFixture<RunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunaComponent, NumberComponent, TextComponent ],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
