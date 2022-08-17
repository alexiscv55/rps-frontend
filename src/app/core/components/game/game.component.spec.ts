import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  const hands = ['A', 'B'];
  const spy = jasmine.createSpyObj('GameService', ['playHand', 'getPlayableHands', 'getObservable']);
  spy.getPlayableHands.and.returnValue(hands);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: [
        { provide: 'GameService', useValue: spy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create buttons for playable hands', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toEqual(hands.length);
  });

  it('button click should call service once', fakeAsync(() => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(spy.playHand).toHaveBeenCalledOnceWith(hands[0]);
  }));
});
