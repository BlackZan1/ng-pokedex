import { HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

// models
import { APIResponse } from '../models/api.model'

// services
import { HttpService } from './http.service'

@Injectable({
    providedIn: 'root'
})
export class PokemonService extends HttpService {
    getPokemons(
        offset: number = 0,
        limit: number = 10      
    ): Observable<APIResponse<any>> {
        let params = new HttpParams().set('offset', offset).set('limit', limit)

        return this.http.get<APIResponse<any>>(`${this.baseUrl}/pokemon`, {
            params
        })
    }

    getPokemonById(
        id: number
    ): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/pokemon/${id}`)
    }
}