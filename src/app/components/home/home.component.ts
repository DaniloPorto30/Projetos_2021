import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  itemImageUrl3 = 'https://icon-library.com/images/pokeball-icon-png/pokeball-icon-png-19.jpg';
  itemImageUrl2 = 'https://camo.githubusercontent.com/a394417886811ae983a9c8506bb86054cf746993/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067';
 
  constructor() { }

  ngOnInit(): void {
  }

}
