import { CommonModule } from '@angular/common';
import { Component, Input, Output, input,EventEmitter } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

@Input() username='';
@Output() addFavoriteEvent= new EventEmitter<string>();

fav(gameName:string){
  this.addFavoriteEvent.emit(gameName) // emito el evento pasando el nombre del juego
}

games = [
{

  id:1,
  name: 'Fifa 15'

},
{
id:2,
name:'Pes 6'

},
{
  id:3,
  name:'EaFC 24'
}


]



}
