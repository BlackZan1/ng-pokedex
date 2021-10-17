import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// components
import { PokedexComponent } from './components/pokedex/pokedex.component' 
import { PokemonDetailsComponent } from './components/pokemonDetails/pokemonDetails.component'

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokedexComponent
  },
  {
    path: 'pokedex/:id',
    component: PokemonDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}