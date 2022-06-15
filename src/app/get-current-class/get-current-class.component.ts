import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-get-current-class',
  templateUrl: './get-current-class.component.html',
  styleUrls: ['./get-current-class.component.css']
})
export class GetCurrentClassComponent implements OnInit {
  data:any;
  layout:any;






  createPieChart()
  {
    this.http.get('http://localhost:8080/tier/getCurrentClass').subscribe(value=> {
      let values: any = value;
      let trace1 = {
        x: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
        y: [values[0], values[1], values[2], values[3], values[4], values[5]],
        name: 'Homme',
        type: 'bar'
      };
      let trace2 = {
        x: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
        y: [values[6], values[7], values[8], values[9], values[10], values[10]],
        name: 'Femme',
        type: 'bar'
      };
      let data = [trace1, trace2];

      let layout = {barmode: 'stack',width:460, xaxis: {
          title: {
            text: 'Current Class',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: 'black'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Number of Clients ',
            font: {
              family: 'Courier New, monospace',
              size: 18,
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




