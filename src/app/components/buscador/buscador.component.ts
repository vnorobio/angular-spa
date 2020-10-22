import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private _router:Router,
              private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService
    ) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {

      this.termino = params['termino'];

      this.heroes = this._heroesService.findHeroes(params['termino']);
      //console.log(this.heroes);
      
    })
  }

  /*
  verHeroe(idx:number){

    this._router.navigate(['/heroe', idx]);

  }
*/
}
