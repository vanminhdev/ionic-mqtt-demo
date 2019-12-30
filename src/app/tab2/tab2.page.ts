import { Component, ViewChild } from '@angular/core';
import { MQTTService } from 'ionic-mqtt';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  private _mqttClient: any;
  private nhietdo: any;


  private MQTT_CONFIG: {
    host: string,
    port: number,
    clientId: string,
  } = {
    host: "broker.mqttdashboard.com",
    port: 8000,
    clientId: "clientId-LtNoLonsYY",
  };

  private TOPIC: string[] = ["topictestnhietdo"];

  constructor(private _mqttService: MQTTService) {

  }

  ngOnInit() {
    this._mqttClient = this._mqttService.loadingMqtt(this._onConnectionLost, (message)=>{this.nhietdo = message.payloadString}, this.TOPIC, this.MQTT_CONFIG);
  }

  private _onConnectionLost(responseObject) {
    console.log('_onConnectionLost nhiet do ', responseObject);
  }

  public publishMessage() {
    console.log('publishMessage nhiet do')
    this._mqttService.publishMessage(this.TOPIC[0], "21");
  }

  
}
