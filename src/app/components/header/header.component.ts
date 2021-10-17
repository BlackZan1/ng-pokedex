import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isActive: boolean

    constructor() {
        this.isActive = false
    }

    ngOnInit(): void {
        const { pathname } = window.location

        console.log(pathname);

        if(pathname.includes('pokedex')) this.isActive = true
    }
}