import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpsRoutingModule } from './rps-routing.module';
import { GameModule } from 'src/app/core/components/game/game.module';
import { RockPaperScissorsService } from 'rps-client';
import { RpsService } from 'src/app/core/services/rps.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RpsRoutingModule,
    GameModule
  ],
  providers: [
    { provide: 'GameService', useClass: RpsService },
    RockPaperScissorsService
  ]
})
export class RpsModule { }
