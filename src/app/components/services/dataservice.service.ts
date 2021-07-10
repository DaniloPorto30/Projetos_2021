import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor( private http: HttpClient) { }

  // Pegar Pokemons qtde
  GetPokemons(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }
  
  // Pegar Pokemons name
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  
  // Pegar Pokemon id
  getPokemon(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
  }
  
  
