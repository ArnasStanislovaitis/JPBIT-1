import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktaiComponent } from './puslapiai/kontaktai/kontaktai.component';
import { PagrindinisComponent } from './puslapiai/pagrindinis/pagrindinis.component';

const routes: Routes = [
  { path: 'kontaktai', component: KontaktaiComponent },
  { path: 'pagrindinis', component: PagrindinisComponent },
  { path: '**', component: PagrindinisComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
