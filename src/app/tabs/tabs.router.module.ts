import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { QuizPage } from '../quiz/quiz.page';
import { EuropePage } from '../europe/europe.page';
import { CroatiaPage } from '../croatia/croatia.page';
import { FrancePage } from '../france/france.page';
import { ItalyPage } from '../italy/italy.page';
import { UkrainePage } from '../ukraine/ukraine.page';
import { TripsPage } from '../trips/trips.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'quiz',
        outlet: 'quiz',
        component: QuizPage
      },
      {
        path: 'europe',
        outlet: 'europe',
        component: EuropePage
      },
      {
        path: 'croatia',
        outlet: 'croatia',
        component: CroatiaPage
      },
      {
        path: 'france',
        outlet: 'france',
        component: FrancePage
      },
      {
        path: 'italy',
        outlet: 'italy',
        component: ItalyPage
      },
      {
        path: 'ukraine',
        outlet: 'ukraine',
        component: UkrainePage
      },
      {
        path: 'trips',
        outlet: 'trips',
        component: TripsPage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
