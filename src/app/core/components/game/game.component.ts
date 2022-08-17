import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GameResponse } from '../../types/game-response.interface';
import { GameService } from '../../types/game.service.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  protected observable$: Observable<GameResponse>;
  protected hands: string[];
  protected lastClicked: string = '';

  constructor(@Inject('GameService') private readonly service: GameService) {
    this.observable$ = this.service.getObservable()
    this.hands = this.service.getPlayableHands();
  }

  onButtonClick(hand: string) {
    this.lastClicked = hand;
    this.service.playHand(hand);
  }

}
