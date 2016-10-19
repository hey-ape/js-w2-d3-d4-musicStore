import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'earworm',
  template: `
  <div class="container">
    <h1>Earworm</h1>
    <album-list
      [childAlbumList] = "allAlbums"
    ></album-list>


  </div>

  `
})

export class AppComponent {
  public allAlbums: Album[] = [
    new Album("./../resources/images/orange.jpg", "Channel Orange", "Frank Ocean", "RnB", 12),
    new Album("./../resources/images/thewall.jpg", "The Wall", "Pink Floyd", "Rock", 10),
    new Album("./../resources/images/nevermind.jpg", "Nevermind", "Nirvana", "Grunge", 10),
    new Album("./../resources/images/currents.jpg", "Currents", "Tame Impala", "Psychedelic", 12),
    new Album("./../resources/images/wheelseoffire.jpg", "Wheels of Fire", "Cream", "Rock", 9),
    new Album("./../resources/images/elevator.jpg", "Elevator to the Gallows", "Miles Davis", "Jazz", 10),
    new Album("./../resources/images/midnightvultures.jpg", "Midnite Vultures", "Beck", "Funk", 8),
    new Album("./../resources/images/apollo.jpg", "Live at the Apollo", "James Brown", "Funk", 10),
    new Album("./../resources/images/modernguilt.jpg", "Modern Guilt", "Beck", "Psychedelic", 11),
    new Album("./../resources/images/ummagumma.jpg", "Ummagumma", "Pink Floyd", "Psychedelic", 9)
  ]

}
