import { Component, OnInit } from '@angular/core';
import {TierService} from "../tier.service";
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CalculatorResultComponent} from "../calculator-result/calculator-result.component";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
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

  constructor(private matDialog: MatDialog,private http: HttpClient, private fb: FormBuilder, private userService: UserService, private route: Router) {


    this.addTier = this.fb.group({
      segment: [0, Validators.required],
      sexe: [0, Validators.required],
      employeurClient: [0, Validators.required],
      codeDirection: [0, Validators.required],
      codeAgence: [0, Validators.required],
      age: [0, Validators.required],
      anciennete: [0, Validators.required],
      maxCredit: [0, Validators.required],
      minCredit: [0, Validators.required],
      revenuMensuel: [0, Validators.required],
      dureeSommeil: [0, Validators.required],
      nbrMouvementCredit: [0, Validators.required],
      nbrMouvementDebit: [0, Validators.required],
      nbrComptesOuverts: [0, Validators.required],
      riskClass: [0, Validators.required],
      nbrAbonnements: [0, Validators.required],
      nbrEngagementFinis: [0, Validators.required],
      enoursFinPeriode: [0, Validators.required],
      impayeFinPeriode: [0, Validators.required],
      NbrPeriodeImpayes: [0, Validators.required],
      soldeMoyenMensuel: [0, Validators.required],
      mouvementDebitMoyenne: [0, Validators.required],
      etatCivil: [0, Validators.required],
      situationContractuelle: [0, Validators.required],


    });
  }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='200px'
      dialogConfig.width='500px'
    dialogConfig.data = this.result;

    this.matDialog.open(CalculatorResultComponent, dialogConfig);
  }
  result: any;

  add() {

    console.log(this.addTier.value)
    let r={
      x1:parseFloat( this.addTier.value.NbrPeriodeImpayes),
      x2:parseFloat(  this.addTier.value.riskClass),
      x3:parseFloat(  this.addTier.value.anciennete),
      x4:parseFloat(this.addTier.value.sexe),
      x5:parseFloat(this.addTier.value.situationContractuelle),
      x6:parseFloat(this.addTier.value.employeurClient),
      x7:parseFloat(this.addTier.value.revenuMensuel),
      x8:parseFloat(this.addTier.value.dureeSommeil),
      x9:parseFloat(this.addTier.value.maxCredit),
      x10:parseFloat(this.addTier.value.minCredit),
      x11:parseFloat(this.addTier.value.nbrMouvementCredit),
      x12:parseFloat(this.addTier.value.nbrMouvementDebit),
      x13:parseFloat(this.addTier.value.nbrComptesOuverts),
      x14:parseFloat(this.addTier.value.nbrAbonnements),
      x15:parseFloat(this.addTier.value.age),
      x16: parseFloat(this.addTier.value.codeAgence),
      x17: parseFloat(this.addTier.value.enoursFinPeriode),
      x18: parseFloat(this.addTier.value.etatCivil),
      x19: parseFloat(this.addTier.value.impayeFinPeriode),
      x20: parseFloat(this.addTier.value.mouvementDebitMoyenne),
      x21: parseFloat(this.addTier.value.nbrEngagementFinis),
      x22: parseFloat(this.addTier.value.soldeMoyenMensuel),
      x23:parseFloat(this.addTier.value.codeDirection)

    }
    console.log(r)

    this.http.post(' http://127.0.0.1:8000/predict', r
        ,optionRequete).subscribe(value => {
        console.log(value)
        this.result = value;
        this.openDialog()
      })
      console.log(this.addTier)

    }


}
