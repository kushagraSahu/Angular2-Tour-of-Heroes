import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service'

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html' ,
    styleUrls: ['app/heroes.component.css'],
})

export class HeroesComponent implements OnInit {
    title = 'Tour of heroes';
    heroes: Hero[];    
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    //For Slow simulation of heroes' list.
    // getHeroesSlowly() {
    //     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    // }
    
    ngOnInit(){
        this.getHeroes();
    }   
    
    gotoDetail(hero: Hero) {
            let link = ['/detail', hero.id];
            this.router.navigate(link)
        }
}


