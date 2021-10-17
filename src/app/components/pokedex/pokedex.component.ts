import { Component, OnInit } from '@angular/core'
import { APIResponse } from '../../models/api.model'

// services
import { PokemonService } from '../../services/pokemon.service'

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  public pokemons: any[]
  public offset: number
  public firstExtra: boolean
  public extraLoading: boolean
  public allCount: number

  constructor(
    private httpService: PokemonService
  ) { 
    this.pokemons = []
    this.offset = 0
    this.firstExtra = true
    this.extraLoading = false
    this.allCount = 0
  }

  mapDataWithId(array: any[]) {
    return array.map((i) => ({
      ...i,
      id: i.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    }))
  }

  getPokemons() {
    this.httpService
    .getPokemons(0, 50)
    .subscribe((pokeList: APIResponse<any>) => {
      console.log(pokeList)

      this.allCount = pokeList.count || 0

      this.pokemons = this.mapDataWithId(pokeList.results)
    })
  }

  getExtraPokemons() {
    if(this.extraLoading) return
      
    this.offset += this.firstExtra ? 50 : 30
    this.extraLoading = true

    this.httpService
    .getPokemons(this.offset, 30)
    .subscribe((pokeList: APIResponse<any>) => {
      const mappedItems = this.mapDataWithId(pokeList.results)

      this.extraLoading = false
      this.firstExtra = false
      this.pokemons = [
        ...this.pokemons,
        ...mappedItems
      ]

      console.log(this.extraLoading)
    })
  }

  ngOnInit(): void {
    this.getPokemons()
  }
}
