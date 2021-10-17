import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

// env
import { environment as env } from 'src/environments/environment'

// models
import { APIResponse } from '../models/api.model'

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    public baseUrl: string

    constructor(public http: HttpClient) {
        this.baseUrl = env.BASE_URL
    }
}