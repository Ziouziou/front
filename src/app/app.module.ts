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
import { GistModule } from '@sgbj/angular-gist';
import { EditUserComponent } from './edit-user/edit-user.component';

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
    EditUserComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
