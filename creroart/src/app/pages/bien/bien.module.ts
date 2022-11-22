import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienPageRoutingModule } from './bien-routing.module';

import { BienPage } from './bien.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienPageRoutingModule
  ],
  declarations: [BienPage]
})
export class BienPageModule {}
