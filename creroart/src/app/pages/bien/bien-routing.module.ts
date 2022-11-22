import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienPage } from './bien.page';

const routes: Routes = [
  {
    path: '',
    component: BienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienPageRoutingModule {}
