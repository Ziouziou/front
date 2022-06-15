import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-get-segmentation',
  templateUrl: './get-segmentation.component.html',
  styleUrls: ['./get-segmentation.component.css']
})
export class GetSegmentationComponent implements OnInit {

  data:any;
  layout:any;






  createPieChart()
  {
    this.http.get('http://localhost:8080/tier/getSegmentation').subscribe(value=> {
      let values: any = value;
      console.log(value)
      this.data = [{
        values: [values[0].value,values[1].value],
        labels: ['Professional', 'Particulier'],
        type: 'pie'
      }];

      this.layout = {
        height: 300,
        width: 340,
        title: {
          text:'Segment Distribution',
          font: {
            family: 'Courier New, monospace',
            size: 18
          },
          xref: 'paper',
          x: 0.05,
        },
      };
    })
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.createPieChart()

  }

}

