import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { AddTiersComponent } from './add-tiers/add-tiers.component';
import {HttpClientModule} from "@angular/common/http";
import { VoirDNComponent } from './voir-dn/voir-dn.component';
import { BiComponent } from './bi/bi.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { CALCULATORComponent } from './calculator/calculator.component';
import { AgentComponent } from './agent/agent.component';
import { MLpartieComponent } from './mlpartie/mlpartie.component';
import { FinancierComponent } from './financier/financier.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {PlotlyModule} from "angular-plotly.js";
import * as PlotlyJS from 'plotly.js-dist-min';
import { DataVisioComponent } from './data-visio/data-visio.component';
import { DataVisiSituationCComponent } from './data-visi-situation-c/data-visi-situation-c.component';
import { DataVisiContratDistributionComponent } from './data-visi-contrat-distribution/data-visi-contrat-distribution.component';
import { GetOldClassSelonSexeDataVisoComponent } from './get-old-class-selon-sexe-data-viso/get-old-class-selon-sexe-data-viso.component';
import { GetSegmentationComponent } from './get-segmentation/get-segmentation.component';
import { GetCivilEtatComponent } from './get-civil-etat/get-civil-etat.component';
import { GetCurrentClassComponent } from './get-current-class/get-current-class.component';
import { GetClientDistComponent } from './get-client-dist/get-client-dist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';


PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [
    AppComponent,

    SignInComponent,
    UserInterfaceComponent,
    AddTiersComponent,
    VoirDNComponent,
    BiComponent,
    AdminInterfaceComponent,
    CALCULATORComponent,
    AgentComponent,
    MLpartieComponent,
    FinancierComponent,
    CreateUserComponent,
    DisplayUsersComponent,
    EditUserComponent,
    DataVisioComponent,
    DataVisiSituationCComponent,
    DataVisiContratDistributionComponent,
    GetOldClassSelonSexeDataVisoComponent,
    GetSegmentationComponent,
    GetCivilEtatComponent,
    GetCurrentClassComponent,
    GetClientDistComponent,
    CalculatorResultComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    PlotlyModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
