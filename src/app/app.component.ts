import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tailwind-test';

  cardsLR = [
   {src: '/assets/images/food1.jpeg', alt: 'japonese food', foodDescription: '5 Bean Chilli Stew', madeBy: "Recipe by Mario"}
  ]

  cardsMPO = [
    {src: '/assets/images/food2.jpeg', alt: 'food2', foodDescription: '3 bean chilly Stew', madeBy:"Matheus"}
  ]
}

