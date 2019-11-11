import { Component } from '@angular/core';
import { MQTTService } from 'ionic-mqtt';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  private _mqttClient: any;

  private MQTT_CONFIG: {
    host: string,
    port: number,
    clientId: string,
  } = {
    host: "broker.mqttdashboard.com",
    port: 8000,
    clientId: "clientId-LtNoLonsYY",
  };

  private TOPIC: string[] = ["topictest"];

  constructor(private _mqttService: MQTTService) {
  }

  ngOnInit() {
    this._mqttClient = this._mqttService.loadingMqtt(this._onConnectionLost, this._onMessageArrived, this.TOPIC, this.MQTT_CONFIG);
  }

  private _onConnectionLost(responseObject) {
    // connection listener
    // ...do actions when connection lost
    console.log('_onConnectionLost ', responseObject);
  }

  private _onMessageArrived(message) {
    // message listener
    // ...do actions with arriving message
    console.log('message arrived ', message.payloadString);
  }

  // public function for sending and publishing mqtt messages

  public sendMessage() {
    console.log('sendMessage')
    this._mqttService.sendMessage("topictest", "loi nhan");
  }

  public publishMessage() {
    console.log('publishMessage')
    this._mqttService.publishMessage("toppictest", "loi nhan");
  }


  private messageArrived: string;

  //
  getData() {

    // alert('load data');
    console.log('chay function get data');
    
    this.sendMessage();



  }
}
