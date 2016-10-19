import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'earworm',
  template: `
  <div class="container">
    <h1>Earworm</h1>
    <album-list
      [childAlbumList]="allAlbums"
    ></album-list>


  </div>

  `
})

export class AppComponent {
  public allAlbums: Album[] = [
    new Album("Orange", "Frank Ocean", "RnB", 12),
    new Album("The Wall", "Pink Floyd", "Rock", 10),
    new Album("Nevermind", "Nirvana", "Grunge", 10),
    new Album("Currents", "Tame Impala", "Psychedelic", 12),
    new Album("Wheels of Fire", "Cream", "Rock", 9),
    new Album("Elevator to the Gallows", "Miles Davis", "Jazz", 10),
    new Album("Midnite Vultures", "Beck", "Funk", 8),
    new Album("Live at the Apollo", "James Brown", "Funk", 10),
    new Album("Modern Guilt", "Beck", "Psychedelic", 11),
    new Album("Atom Heart Mother", "Pink Floyd", "Psychedelic", 9)
  ]

}
