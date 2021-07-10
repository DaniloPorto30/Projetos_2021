import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  pokebotton = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png';
  pokebanner = 'https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1';
  
  constructor() { }

  ngOnInit(): void {
  }

}
