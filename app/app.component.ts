import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'earworm',
  template: `
  <div class="container">
    <h1>Earworm</h1>
    <album-filter
      [childGenreList] = "allGenres"
      [childArtistList] = "allArtists"
      (genreSender) = "selectGenre($event)"
      (artistSender) = "selectArtist($event)"
    ></album-filter>
    <album-list
      [childAlbumList] = "allAlbums"
      [childSelectedGenre] = "selectedGenre"
      [childSelectedArtist] = "selectedArtist"
    ></album-list>


  </div>

  `
})

export class AppComponent {
  public allAlbums: Album[] = [
    new Album("./../resources/images/orange.jpg", "Channel Orange", "Frank Ocean", "R&B", 12),
    new Album("./../resources/images/thewall.jpg", "The Wall", "Pink Floyd", "Progressive", 10),
    new Album("./../resources/images/nevermind.jpg", "Nevermind", "Nirvana", "Grunge", 10),
    new Album("./../resources/images/currents.jpg", "Currents", "Tame Impala", "Psychedelic", 12),
    new Album("./../resources/images/wheelsoffire.jpg", "Wheels of Fire", "Cream", "Psychedelic", 9),
    new Album("./../resources/images/elevator.jpg", "Elevator to the Gallows", "Miles Davis", "Jazz", 10),
    new Album("./../resources/images/midnitevultures.jpg", "Midnite Vultures", "Beck", "Funk", 8),
    new Album("./../resources/images/apollo.jpg", "Live at the Apollo", "James Brown", "Funk", 10),
    new Album("./../resources/images/modernguilt.jpg", "Modern Guilt", "Beck", "Psychedelic", 11),
    new Album("./../resources/images/ummagumma.jpg", "Ummagumma", "Pink Floyd", "Psychedelic", 9)
  ]

  public allGenres: String[] = this.createGenres();
  createGenres(){
    var genreList: String[] = [];
    this.allAlbums.forEach(function(album){
      if(genreList.indexOf(album.genre) === -1) {
            genreList.push(album.genre);
          }
    });
    return genreList;
  }

  public allArtists: String[] = this.createArtists();
  createArtists(){
    var artistList: String[] = [];
    this.allAlbums.forEach(function(album){
      if(artistList.indexOf(album.artist) === -1) {
            artistList.push(album.artist);
          }
    });
    return artistList;
  }

  selectedAlbum: Album = null;
  selectedGenre: string = "all";
  selectedArtist: string = "all";

  selectGenre(genre: string) {
    this.selectedGenre = genre;
  }

  selectArtist(artist: string) {
    this.selectedArtist = artist;
  }

}
