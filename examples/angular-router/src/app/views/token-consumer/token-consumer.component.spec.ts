import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenConsumerComponent } from './token-consumer.component';

describe('TokenConsumerComponent', () => {
  let component: TokenConsumerComponent;
  let fixture: ComponentFixture<TokenConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
