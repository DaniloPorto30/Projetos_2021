import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name: any ='';
  urlImage: any ='';
  nome: any ='';
  altura: string ='';
  id: any = '';
  peso: any = '';

  constructor(private DataserviceService : DataserviceService) { }

  pokefooter= 'https://icon-library.com/images/pokeball-icon-png/pokeball-icon-png-19.jpg';
  pokebotton = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png';

  ngOnInit(){
  }
  
buscar(){
  this.DataserviceService.getPokemon(this.name).subscribe((data:any) =>{
    console.log(data);
    // Obter imagem
    this.urlImage = data.sprites.front_default;
    // Obter nome
    this.nome = data.species.name;
    // Obter altura
    this.altura = data.height;
    // Obter id
    this.id = data.id;
     // Obter comprimento
     this.peso = data.weight;
     this.name = '';
  }, (err: any) => { 
    alert("Erro!! Pokemon não encontrado.");
    this.name = '';
  }) 
  
}
  
}
