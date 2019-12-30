import { Component } from '@angular/core';
import { MQTTService } from 'ionic-mqtt';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  private _mqttClient: any;
  private isTurnOn: any;
  private btn_turn_on: any;

  private MQTT_CONFIG: {
    host: string,
    port: number,
    clientId: string,
  } = {
    host: "broker.mqttdashboard.com",
    port: 8000,
    clientId: "clientId-3YUNWqGEfQ",
  };

  private TOPIC: string[] = ["topictestcambien"];

  constructor(private _mqttService: MQTTService) {
    this.isTurnOn = false;
    this.btn_turn_on = "Bật đèn"
  }

  ngOnInit() {
    this._mqttClient = this._mqttService.loadingMqtt(this._onConnectionLost, (message)=>{}, this.TOPIC, this.MQTT_CONFIG);
  }

  private _onConnectionLost(responseObject) {
    console.log('_onConnectionLost do am', responseObject);
  }

  public onClickTurnOnLed () {
    
    if(!this.isTurnOn) {
      this.btn_turn_on = "Tắt đèn"
      this.isTurnOn = true;
      console.log(this._mqttService);
      this._mqttService.sendMessage(this.TOPIC[0], "1");
      
    } else {
      this.btn_turn_on = "Bật đèn"
      this.isTurnOn = false;
      this._mqttService.sendMessage(this.TOPIC[0], "0");
    }
  }
}
