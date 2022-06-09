import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {UserInterfaceComponent} from "./user-interface/user-interface.component";
import {AddTiersComponent} from "./add-tiers/add-tiers.component";
import {VoirDNComponent} from "./voir-dn/voir-dn.component";
import {BiComponent} from "./bi/bi.component";
import {CALCULATORComponent} from "./calculator/calculator.component";
import {AdminInterfaceComponent} from "./admin-interface/admin-interface.component";
import {AgentComponent} from "./agent/agent.component";
import {MLpartieComponent} from "./mlpartie/mlpartie.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {DisplayUsersComponent} from "./display-users/display-users.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes =
  [
              {path:'',component:SignInComponent},
              {path:'UserInterface',component:UserInterfaceComponent,
                children:[   {path:'mlpartie',component: MLpartieComponent},
                  {path:'addTier',component:AddTiersComponent},
                  {path:'voirdn',component:VoirDNComponent},
                  {path:'bi',component:BiComponent},
                  {path:'calculator',component:CALCULATORComponent}]},
    {path :'AdminInterface',component:AdminInterfaceComponent,
      children:[
        {path:'voirAgent',component: AgentComponent},
        {path:'createUser',component: CreateUserComponent},
        {path:'displayUsers',component: DisplayUsersComponent},
        {path:'editUsers/:i',component: EditUserComponent}]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
