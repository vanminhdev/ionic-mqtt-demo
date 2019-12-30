import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MQTTService } from 'ionic-mqtt';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = 'chart';
  chartCallback: (chart: any) => void
  chartOptions = {
    chart: {
      type: 'spline',
      width: '350',
      height: '500',
      style: {
        fontFamily: 'serif'
      }
    },
    title: {
      text: 'Biểu đồ nhiệt'
    },
    xAxis: {
      categories: ['1', '2', '3', '4', '5', '6']
    },
    yAxis: {
      title: {
        text: ' '
      }
    },
    series: [{
      name: 'nhiệt độ',
      data: []
    }]
  };

  chartDoAmCallback: (chart: any) => void
  chartOptionsdoam = {
    chart: {
      type: 'spline',
      width: '350',
      height: '500',
      style: {
        fontFamily: 'serif'
      }
    },
    title: {
      text: 'Biểu đồ độ ẩm'
    },
    xAxis: {
      categories: ['1', '2', '3', '4', '5', '6']
    },
    yAxis: {
      title: {
        text: ' '
      }
    },
    series: [{
      name: 'độ ẩm',
      data: [],
      color: '#898DEA'
    }]
  };


  private _mqttClient: any;
  private nhietdo: any;
  private doam: any;

  private MQTT_CONFIG: {
    host: string,
    port: number,
    clientId: string,
  } = {
    host: "broker.mqttdashboard.com",
    port: 8000,
    clientId: "clientId-QeC1BvViH3",
  };

  private TOPIC: string[] = ["topictestnhietdo", "topictestdoam"];
  private chartnhietdo;
  private chartdoam;
  private arrNhietDo: number[] = new Array();
  private arrDoAm: number[] = new Array();

  ngOnInit() {
    this._mqttClient = this._mqttService.loadingMqtt(this._onConnectionLost, this.getData.bind(this), this.TOPIC, this.MQTT_CONFIG);
  }

  private getData(message){
    //console.log(message);
    if(message.destinationName == this.TOPIC[0]) {
      if(this.arrNhietDo.length == 6) {
        this.arrNhietDo.splice(0,1);
      }
      this.arrNhietDo.push(+message.payloadString);
      this.chartnhietdo.update({
          series: [{
            name: 'nhiệt độ',
            data: this.arrNhietDo
          }]
        });
    }
    if (message.destinationName == this.TOPIC[1]) {
      if(this.arrDoAm.length == 6) {
        this.arrDoAm.splice(0,1);
      }
      this.arrDoAm.push(+message.payloadString);
      this.chartdoam.update({
          series: [{
            name: 'độ ẩm',
            data: this.arrDoAm
          }]
        });
    }
  }

  private _onConnectionLost(responseObject) {
    console.log('_onConnectionLost nhiet do ', responseObject);
  }
  
  constructor(private _mqttService: MQTTService) {
    const self = this;
    this.chartCallback = (chart) => {
      self.chartnhietdo = chart;
      series: [{
        name: 'nhiệt độ',
        data: []
      }]
    }

    this.chartDoAmCallback = (chart) => {
      self.chartdoam = chart;
      series: [{
        name: 'độ ẩm',
        data: []
      }]
    }
  }
}
