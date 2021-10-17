import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

// services
import { PokemonService } from 'src/app/services/pokemon.service'

@Component({
    selector: 'pokemon-details',
    templateUrl: './pokemonDetails.component.html',
    styleUrls: ['./pokemonDetails.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
    private routerSub: Subscription
    public data: any

    constructor(
        private httpService: PokemonService,
        private route: ActivatedRoute
    ) {
        this.routerSub = this.route.params.subscribe()
        this.data = {
            id: 0
        }
    }

    ngOnInit(): void {
        this.routerSub = this.route.params.subscribe((params) => {
            console.log(params.id);
            console.log(params);

            this.data = {
                id: params.id
            }
        })
    }
}