import { Component, OnInit } from '@angular/core';

interface ISocialNetwork {
  name: string;
  url: string;
  image: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public socialNetworks: ISocialNetwork [] = [
    {name: 'Telegram', url: 'https://web.telegram.org/z/', image: 'http://assets.stickpng.com/images/6002f8ca51c2ec00048c6c69.png'},
    {name: 'Whatsapp', url:'https://www.whatsapp.com/?lang=es%27', image: 'http://assets.stickpng.com/images/5a4e2ef62da5ad73df7efe6e.png'},
    {name: 'Twiter', url:'https://twitter.com/?lang=es', image: 'http://assets.stickpng.com/images/5a2fe479cc45e43754640849.png'},
    {name: 'Instagram', url:'https://www.instagram.com/', image: 'http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
