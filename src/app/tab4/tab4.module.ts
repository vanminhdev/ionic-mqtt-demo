import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { IonicMqttModule, MQTTService } from 'ionic-mqtt';
import {GaugesModule} from 'ng-canvas-gauges';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    IonicMqttModule,
    GaugesModule
  ],
  providers: [
    MQTTService
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
