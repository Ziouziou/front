import { Component, OnInit } from '@angular/core';
import {TierService} from "../tier.service";
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
const optionRequete = {
  headers: new HttpHeaders(
    {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',

    })
};
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CALCULATORComponent implements OnInit {

  addTier: any
  inValid = false;
  Valid = false;

  constructor(private http: HttpClient, private fb: FormBuilder, private userService: UserService, private route: Router) {


    this.addTier = this.fb.group({
      segment: ['', Validators.required],
      sexe: ['', Validators.required],
      employeurClient: ['', Validators.required],
      codeDirection: ['', Validators.required],
      codeAgence: ['', Validators.required],
      age: ['', Validators.required],
      anciennete: ['', Validators.required],
      maxCredit: ['', Validators.required],
      minCredit: ['', Validators.required],
      revenuMensuel: ['', Validators.required],
      dureeSommeil: ['', Validators.required],
      nbrMouvementCredit: ['', Validators.required],
      nbrMouvementDebit: ['', Validators.required],
      nbrComptesOuverts: ['', Validators.required],
      riskClass: ['', Validators.required],
      nbrAbonnements: ['', Validators.required],
      nbrEngagementFinis: ['', Validators.required],
      enoursFinPeriode: ['', Validators.required],
      impayeFinPeriode: ['', Validators.required],
      NbrPeriodeImpayes: ['', Validators.required],
      soldeMoyenMensuel: ['', Validators.required],
      mouvementDebitMoyenne: ['', Validators.required],
      etatCivil: ['', Validators.required],
      situationContractuelle: ['', Validators.required],


    });
  }

  ngOnInit(): void {
  }

  result: any;

  add() {
      this.http.post('http://127.0.0.1:5000/api', this.addTier.value,optionRequete).subscribe(value => {
        console.log(value)
        this.result = value;
      })
      console.log(this.addTier)

    }


}
