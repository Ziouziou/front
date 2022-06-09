import { Component, OnInit } from '@angular/core';
import {TierService} from "../tier.service";

@Component({
  selector: 'app-voir-dn',
  templateUrl: './voir-dn.component.html',
  styleUrls: ['./voir-dn.component.css']
})
export class VoirDNComponent implements OnInit {

  constructor(private tierServie:TierService) { }

  allTiers:any;
  deleted=false;
  ngOnInit(): void {
    this.getAll();
  }

  delete(id:number)
  {
    this.tierServie.delete(id).subscribe(value =>{console.log(value);this.deleted=true;this.getAll()});
  }
  getAll()
  {
    this.tierServie.getAll().subscribe(value => {this.allTiers=value;console.log(value)});
  }
}
