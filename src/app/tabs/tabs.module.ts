import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { QuizPageModule } from '../quiz/quiz.module';
import { HomePageModule } from '../home/home.module';
import { EuropePageModule } from '../europe/europe.module';
import { CroatiaPageModule } from '../croatia/croatia.module';
import { FrancePageModule } from '../france/france.module';
import { ItalyPageModule } from '../italy/italy.module';
import { UkrainePageModule } from '../ukraine/ukraine.module';
import { TripsPageModule } from '../trips/trips.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    QuizPageModule,
    EuropePageModule,
    CroatiaPageModule,
    FrancePageModule,
    ItalyPageModule,
    UkrainePageModule,
    TripsPageModule,
    AboutPageModule,
    ContactPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
