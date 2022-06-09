import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TierService {

  constructor(private http:HttpClient)
  {}


  addTier(values:any)
  {

    return this.http.post('http://localhost:8080/tier/addTier',{
      "NbrPeriodeImpayes":values.NbrPeriodeImpayes,
      "age":values.age,
      " anciennete":values.anciennete,
      'codeAgence':values.codeAgence,
      'codeDirection':values.codeDirection,
      'dureeSommeil': values.dureeSommeil,
      'employeurClient':values.employeurClient,
      'enoursFinPeriode':values.enoursFinPeriode,
      'etatCivil': values.etatCivil[0],
      'impayeFinPeriode': values.impayeFinPeriode,
      'maxCredit':values.maxCredit,
      'minCredit':values.minCredit,
      'mouvementDebitMoyenne':values.mouvementDebitMoyenne,
      'nbrAbonnements':values.nbrAbonnements,
      'nbrComptesOuverts':values.nbrComptesOuverts,
      'nbrEngagementFinis':values.nbrEngagementFinis,
      'nbrMouvementCredit':values.nbrMouvementCredit,
      'nbrMouvementDebit':values.nbrMouvementDebit,
      'revenuMensuel':values.revenuMensuel,
      'riskClass':values.riskClass,
      'segment': values.segment,
      'sexe': values.sexe,
      'situationContractuelle':values.situationContractuelle[0],
      'soldeMoyenMensuel':values.soldeMoyenMensuel})
  }

  getAll()
  {
    return this.http.get('http://localhost:8080/user/getAlldm')
  }

  delete(id: number)
  {
      return this.http.delete('http://localhost:8080/tier/delete', {params:{'id': id}});
  }
}
