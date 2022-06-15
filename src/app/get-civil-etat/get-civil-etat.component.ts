import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-get-civil-etat',
  templateUrl: './get-civil-etat.component.html',
  styleUrls: ['./get-civil-etat.component.css']
})
export class GetCivilEtatComponent implements OnInit {
  data:any;
  layout:any;






  createPieChart()
  {
    this.http.get('http://localhost:8080/tier/getCivilStatSelonSituation').subscribe(value=> {
      let values: any = value;
      let trace1 = {
        x: ['0', '1', '2', '3','4'],
        y: [values[0], values[1], values[2], values[3], values[4]],
        name: 'SAFE',
        type: 'bar'
      };
      let trace2 = {
        x: ['0', '1', '2', '3','4'],
        y: [values[5], values[6], values[7], values[8],values[9]],
        name: 'DANGER',
        type: 'bar'
      };
      let data = [trace1, trace2];

      let layout = {barmode: 'group',width:500,  xaxis: {
          title: {
            text: 'Etat Civil  ',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: 'black'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Nombre des Clients  ',
            font: {
              family: 'Courier New, monospace',
              size: 17,
              color: 'black'
            }
          }
        }};
      this.data=data;
      this.layout=layout;
    })
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.createPieChart()

  }

}



