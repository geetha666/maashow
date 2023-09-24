import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'clothes', url: '/folder/clothes/1', icon: 'mail' },
    { title: 'vegies', url: '/folder/vegies/2', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites/3', icon: 'heart' },
    { title: 'groceries', url: '/folder/groceries/4', icon: 'archive' },
    { title: 'furniture', url: '/folder/furniture', icon: 'trash' },
    { title: 'sports', url: '/folder/sports', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
