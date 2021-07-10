import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  page = 1;
  totalPokemons!: number;

  constructor(private dataserviceService: DataserviceService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  // Pegar pokemons
  getPokemons() {
    this.dataserviceService.GetPokemons(21, (this.page - 1) * 50 + 0)
      .subscribe((res: any) => {

        this.totalPokemons = res.count;

        res.results.forEach((result: { name: string; }) => {
          this.dataserviceService.getMoreData(result.name)
            .subscribe((uniqres: any) => {
              this.pokemons.push(uniqres);
            });
        });
      });
  }
}
