import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'seach', component: SearchComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
