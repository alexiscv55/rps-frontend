import { Injectable } from '@angular/core';
import { GeekModeResponse, RockPaperScissorsLizardSpockService } from 'rps-client';
import { map, Observable } from 'rxjs';
import { GameResponse } from '../types/game-response.interface';
import { BaseService } from './base.service';

@Injectable()
export class RpslsService extends BaseService {

  constructor(private readonly service: RockPaperScissorsLizardSpockService) { 
    super();
  }

  public override getPlayableHands(): string[] {
    return Object.values(GeekModeResponse.OpponentHandEnum);
  }

  protected callService(hand: string): Observable<GameResponse> {
    return this.service.play(hand).pipe(
      map(res => ({opponentHand: res.opponentHand || '', result: res.result || ''}))
    );
  }
}