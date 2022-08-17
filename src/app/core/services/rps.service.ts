import { Injectable } from '@angular/core';
import { RegularModeResponse, RockPaperScissorsService } from 'rps-client';
import { map, Observable, Subject } from 'rxjs';
import { GameResponse } from '../types/game-response.interface';
import { BaseService } from './base.service';

@Injectable()
export class RpsService extends BaseService {

  constructor(private readonly service: RockPaperScissorsService) { 
    super();
  }

  public override getPlayableHands(): string[] {
    return Object.values(RegularModeResponse.OpponentHandEnum);
  }

  protected callService(hand: string): Observable<GameResponse> {
    return this.service.play1(hand).pipe(
      map(res => ({opponentHand: res.opponentHand || '', result: res.result || ''}))
    );
  }
}
