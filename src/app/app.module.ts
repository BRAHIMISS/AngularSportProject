import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CupEventComponent } from './Components/cup-event/cup-event.component';
import { ResultComponent } from './Components/result/result.component';
import { NewsComponent } from './Components/news/news.component';
import { StandingsComponent } from './Components/standings/standings.component';
import { BlogComponent } from './Components/blog/blog.component';
import { InfoComponent } from './Components/info/info.component';
import { ArticleComponent } from './Components/article/article.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { AddMatchComponent } from './Components/add-match/add-match.component';
import { AddTeamComponent } from './Components/add-team/add-team.component';
import { AddPlayerComponent } from './Components/add-player/add-player.component';
import { AdminComponent } from './Components/admin/admin.component';
import { TeamsTableComponent } from './Components/teams-table/teams-table.component';
import { MatchesTableComponent } from './Components/matches-table/matches-table.component';
import { PlayersTableComponent } from './Components/players-table/players-table.component';
import { MatchesComponent } from './Components/matches/matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTestComponent } from './Components/form-test/form-test.component';
import { ReactivFormComponent } from './Components/reactiv-form/reactiv-form.component';
import { AsterixPipe } from './pipes/asterix.pipe';

import { HttpClientModule } from '@angular/common/http';
import { EditTeamComponent } from './Components/edit-team/edit-team.component';
import { EditMatchComponent } from './Components/edit-match/edit-match.component';
import { EditPlayerComponent } from './Components/edit-player/edit-player.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    TeamsTableComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    MatchesComponent,
    FormTestComponent,
    ReactivFormComponent,
    AsterixPipe,
    EditTeamComponent,
    EditMatchComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
