import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tailwind-test';

  cardsLR = [
   {src: '/assets/images/food1.jpeg', alt: 'japonese food', foodDescription: '5 Bean Chilli Stew', madeBy: "Recipe by Mario", minutes: '25 min'},

   {src: '/assets/images/food2.jpeg', alt: 'japonese food', foodDescription: '4 Bean Chilli Stew', madeBy: "Recipe by Maria", minutes: '30 min'},
   {src: '/assets/images/food3.jpeg', alt: 'japonese food', foodDescription: '3 Bean Chilli Stew', madeBy: "Recipe by Pedro", minutes: '15 min'}
  ]

  cardsMPO = [
    {src: '/assets/images/food2.jpeg', alt: 'food2', foodDescription: '3 bean chilly Stew', madeBy:"Matheus"}
  ]
}

