import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',// etiqueta a utilizar para poder utilizar el componente
  standalone: true,
  imports: [CommonModule,GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
userName = 'Nacho Di Martino';
isLoggedin=false;
favGame= '';

getFavorite(gameName:string) {
this.favGame=gameName


}

greet(){
  alert('hola!!!')
}

}
