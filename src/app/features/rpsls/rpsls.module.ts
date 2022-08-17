import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpslsRoutingModule } from './rpsls-routing.module';
import { GameModule } from 'src/app/core/components/game/game.module';
import { RockPaperScissorsLizardSpockService } from 'rps-client';
import { RpslsService } from 'src/app/core/services/rpsls.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RpslsRoutingModule,
    GameModule
  ],
providers: [
    { provide: 'GameService', useClass: RpslsService },
    RockPaperScissorsLizardSpockService
  ]
})
export class RpslsModule { }
