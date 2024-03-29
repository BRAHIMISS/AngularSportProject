import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { AddMatchComponent } from './Components/add-match/add-match.component';
import { AddTeamComponent } from './Components/add-team/add-team.component';
import { AddPlayerComponent } from './Components/add-player/add-player.component';
import { AdminComponent } from './Components/admin/admin.component';
import { MatchesComponent } from './Components/matches/matches.component';
import { PlayersTableComponent } from './Components/players-table/players-table.component';
import { FormTestComponent } from './Components/form-test/form-test.component';
import { ReactivFormComponent } from './Components/reactiv-form/reactiv-form.component';
import { EditTeamComponent } from './Components/edit-team/edit-team.component';
import { EditMatchComponent } from './Components/edit-match/edit-match.component';
import { EditPlayerComponent } from './Components/edit-player/edit-player.component';

const routes: Routes = [{path:"",component:HomeComponent},
                        {path:"login",component:LoginComponent},
                        {path:"signup",component:SignupComponent},
                        {path:"player", component:PlayersTableComponent},
                        //***Test de quelque Features
                        {path:"test",component:FormTestComponent},
                        {path:"reactivForm",component:ReactivFormComponent},
                        {path:"editTeam/:id",component:EditTeamComponent},
                        {path:"editMatch/:id",component:EditMatchComponent},
                        {path:"editPlayer/:id",component:EditPlayerComponent},
                        //*** * END Tests
                        {path:"addMatch",component:AddMatchComponent},
                        {path:"addTeam",component:AddTeamComponent},
                        {path:"addPlayer",component:AddPlayerComponent},
                        {path:"matches",component:MatchesComponent},
                        {path:"admin",component:AdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
