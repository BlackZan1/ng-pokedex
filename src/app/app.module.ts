// modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzInputModule } from 'ng-zorro-antd/input'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { NzBackTopModule } from 'ng-zorro-antd/back-top'

// components
import { AppComponent } from './app.component'
import { PokedexComponent } from './components/pokedex/pokedex.component'
import { HeaderComponent } from './components/header/header.component'

// utils
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { en_US } from 'ng-zorro-antd/i18n'

// interceptors
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor'
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor'
import { PokemonDetailsComponent } from './components/pokemonDetails/pokemonDetails.component'

registerLocaleData(en)

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzInputModule,
    InfiniteScrollModule,
    NzBackTopModule
  ],
  providers: [
    { 
      provide: NZ_I18N, 
      useValue: en_US 
    }, // use antd components with context
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpHeadersInterceptor, 
      multi: true 
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpErrorsInterceptor, 
      multi: true 
    }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }