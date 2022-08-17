import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'secret', loadChildren: () => import('./features/rpsls/rpsls.module').then(m => m.RpslsModule) },
  { path: '**', loadChildren: () => import('./features/rps/rps.module').then(m => m.RpsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
