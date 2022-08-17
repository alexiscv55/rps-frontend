import { Observable } from "rxjs";
import { GameResponse } from "./game-response.interface";

export interface GameService {
    playHand(hand: string): void;
    getPlayableHands(): string[];
    getObservable(): Observable<GameResponse>;
}
