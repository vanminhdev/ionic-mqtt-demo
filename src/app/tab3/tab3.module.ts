import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { IonicMqttModule, MQTTService } from 'ionic-mqtt';
import {GaugesModule} from 'ng-canvas-gauges';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    IonicMqttModule,
    GaugesModule
  ],
  providers: [
    MQTTService
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
