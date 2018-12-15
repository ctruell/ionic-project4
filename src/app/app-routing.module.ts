import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'europe', loadChildren: './europe/europe.module#EuropePageModule' },
  { path: 'quiz', loadChildren: './quiz/quiz.module#QuizPageModule' },
  { path: 'trips', loadChildren: './trips/trips.module#TripsPageModule' },
  { path: 'croatia', loadChildren: './croatia/croatia.module#CroatiaPageModule' },
  { path: 'france', loadChildren: './france/france.module#FrancePageModule' },
  { path: 'italy', loadChildren: './italy/italy.module#ItalyPageModule' },
  { path: 'ukraine', loadChildren: './ukraine/ukraine.module#UkrainePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
