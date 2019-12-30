import { Component } from '@angular/core';
import { MQTTService } from 'ionic-mqtt';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private _mqttClient: any;
  private doam: any;

  private MQTT_CONFIG: {
    host: string,
    port: number,
    clientId: string,
  } = {
    host: "broker.mqttdashboard.com",
    port: 8000,
    clientId: "clientId-CDLo0HbN1r",
  };

  private TOPIC: string[] = ["topictestdoam"];

  constructor(private _mqttService: MQTTService) {
    
  }

  ngOnInit() {
    this._mqttClient = this._mqttService.loadingMqtt(this._onConnectionLost, (message)=>{this.doam = message.payloadString}, this.TOPIC, this.MQTT_CONFIG);
  }

  private _onConnectionLost(responseObject) {
    console.log('_onConnectionLost do am', responseObject);
  }

  public sendMessage() {
    console.log('sendMessage do am')
    this._mqttService.sendMessage(this.TOPIC[0], "60");
  }

  public publishMessage() {
    console.log('publishMessage do am')
    this._mqttService.publishMessage(this.TOPIC[0], "60");
  }
}
