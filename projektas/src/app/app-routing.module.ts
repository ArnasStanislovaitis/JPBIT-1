import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktaiComponent } from './puslapiai/kontaktai/kontaktai.component';
import { PagrindinisComponent } from './puslapiai/pagrindinis/pagrindinis.component';
import { RegistracijaComponent } from './puslapiai/registracija/registracija.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  { path: 'kontaktai', component: KontaktaiComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'pagrindinis', component: PagrindinisComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: '**', component: PagrindinisComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
