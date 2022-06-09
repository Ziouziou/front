import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {TierService} from "../tier.service";

@Component({
  selector: 'app-add-tiers',
  templateUrl: './add-tiers.component.html',
  styleUrls: ['./add-tiers.component.css']
})
export class AddTiersComponent implements OnInit {

  addTier:any
  inValid=false;
  Valid=false;

  constructor(private tierServi : TierService,private fb:FormBuilder,private userService:UserService,private route:Router) {


    this.addTier= this.fb.group({
      segment:['',Validators.required],
      sexe: ['', Validators.required],
      employeurClient: ['', Validators.required],
      codeDirection:['', Validators.required],
      codeAgence:['', Validators.required],
      age:['', Validators.required],
      anciennete:['', Validators.required],
      maxCredit:['', Validators.required],
      minCredit:['', Validators.required],
      revenuMensuel:['', Validators.required],
      dureeSommeil:['', Validators.required],
      nbrMouvementCredit:['', Validators.required],
      nbrMouvementDebit:['', Validators.required],
      nbrComptesOuverts:['', Validators.required],
      riskClass:['', Validators.required],
      nbrAbonnements:['', Validators.required],
      nbrEngagementFinis:['', Validators.required],
      enoursFinPeriode:['', Validators.required],
      impayeFinPeriode:['', Validators.required],
      NbrPeriodeImpayes:['', Validators.required],
      soldeMoyenMensuel:['', Validators.required],
      mouvementDebitMoyenne:['', Validators.required],
      etatCivil:['', Validators.required],
      situationContractuelle:['', Validators.required],



    });
  }

  ngOnInit(): void {
  }
  add() {
    if (this.addTier.status != "INVALID") {
      this.tierServi.addTier(this.addTier.value).subscribe(value => {
        console.log(this.addTier);  this.inValid=false; this.Valid=true;

      })
      console.log(this.addTier)
    } else {
      this.inValid = true;
      this.Valid=false;
    }
    console.log(this.addTier)

  }

}
