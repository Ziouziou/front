import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-get-client-dist',
  templateUrl: './get-client-dist.component.html',
  styleUrls: ['./get-client-dist.component.css']
})
export class GetClientDistComponent implements OnInit {

  value: any;
  layout: any
  marker: any;
  constructor(private http:HttpClient) { }

  data : any;

  ngOnInit(): void {
    this.createPieChart()

  }


  createPieChart()
  {
    this.http.get('http://localhost:8080/tier/getClientDist').subscribe(value=>
    {
      this.value=value;
      this.data = [{
        type: 'bar',
        x: [this.value[0][0], this.value[1][0],this.value[2][0],this.value[3][0],this.value[4][0],this.value[5][0],this.value[6][0],this.value[6][0],this.value[7][0],this.value[8][0],this.value[9][0],this.value[10][0]],
        y: ['B 500', 'Z 500','Z 510','Z 520','Z 550','Z 560','Z 570','Z 580','Z 590','Z 600','Z 610','Z 630'],
        orientation: 'h',
        marker:{
          color: ['#EC7063', '#D2B4DE','#7FB3D5','#48C9B0','#52BE80','#F39C12','#BDC3C7','#95A5A6','#34495E','#1A5276','#F5B041','#DC7633']
        }
      }];

      this.layout = {
        height: 500,
        width: 500,
        xaxis: {
          title: {
            text: 'Code Agence',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: 'black'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Nombre des Clients',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: 'black'
            }
          }
        }
      };

      console.log(value)})
  }
}
