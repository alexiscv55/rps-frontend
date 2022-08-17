import { GeekModeResponse } from "rps-client";
import { catchError, Observable, ObservableInput, Subject } from "rxjs";
import { GameResponse } from "../types/game-response.interface";
import { GameService } from "../types/game.service.interface";

export abstract class BaseService implements GameService {

    protected readonly subject$ = new Subject<GameResponse>();
  
    public abstract getPlayableHands(): string[];

    protected abstract callService(hand: string): Observable<GameResponse>;
  
    public playHand(hand: string) {
      this.callService(hand).pipe(catchError(this.handleError)).subscribe(res => this.subject$.next(res));
    }

    public getObservable() {
      return this.subject$.asObservable();
    }

    /**
     * Just to let the user know. Should be improved
     */
    protected handleError(err: any): ObservableInput<any> {
        alert('Wooops, something is broken.');
        throw 'Something went wrong: ' + err;
    }
  }
  