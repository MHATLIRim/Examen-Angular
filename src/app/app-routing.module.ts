import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstageComponent } from "./addstage/addstage.component";
import { StagesComponent } from "./stages/stages.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { StageService } from './stage.service';


  const routes: Routes = [
    { path: 'ajouter-stage', component: AddstageComponent },
    { path: 'consulter-stages', component: StagesComponent },
    { path: '**', component: NotFoundComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
