import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'earworm',
  template: `
  <div class="container">
    <img class="logo" src="./../resources/images/logo.png" alt="Earworm">
    <div class="row">
      <album-filter
        [childGenreList] = "allGenres"
        [childArtistList] = "allArtists"
        (genreSender) = "selectGenre($event)"
        (artistSender) = "selectArtist($event)"
      ></album-filter>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-3 well">
        <img class="icon" src="./../resources/images/reviews.png"><hr>
      </div>
      <div class="col-sm-6">
        <div class="row">
          <album-list
            [childAlbumList] = "allAlbums"
            [childSelectedGenre] = "selectedGenre"
            [childSelectedArtist] = "selectedArtist"
          ></album-list>
        </div>
      </div>
      <div class="col-sm-3 well">
        <img class="icon" src="./../resources/images/cart.png"><hr>
        <cart-display
        [purchases] = "purchases"
        ></cart-display>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public allAlbums: Album[] = [
    new Album("./../resources/images/thewall.jpg", "The Wall", "Pink Floyd", "Progressive", 10),
    new Album("./../resources/images/elevator.jpg", "Elevator to the Gallows", "Miles Davis", "Jazz", 10),
    new Album("./../resources/images/modernguilt.jpg", "Modern Guilt", "Beck", "Psychedelic", 11),
    new Album("./../resources/images/ummagumma.jpg", "Ummagumma", "Pink Floyd", "Psychedelic", 9),
    new Album("./../resources/images/mala.jpg", "Mala", "Devandra Banhart", "Electropop", 13),
    new Album("./../resources/images/wheelsoffire.jpg", "Wheels of Fire", "Cream", "Psychedelic", 9),
    new Album("./../resources/images/unnatural.jpg", "The Unnatural World", "Have a Nice Life", "Shoegaze", 12),
    new Album("./../resources/images/nevermind.jpg", "Nevermind", "Nirvana", "Grunge", 10),
    new Album("./../resources/images/mywoman.jpg", "My Woman", "Angel Olsen", "Garage", 15),
    new Album("./../resources/images/rosewindows.jpg", "Rose Windows", "Rose Windows", "Psychedelic", 12),
    new Album("./../resources/images/snakehymns.jpg", "Snake Hymns", "Bus Gas", "Drone", 10),
    new Album("./../resources/images/theoryofmachines.jpg", "Theory of Machines", "Ben Frost", "Experimental", 10),
    new Album("./../resources/images/celestial.jpg", "Music for the Celestial Din", "Garek Jon Druss", "Experimental", 8),
    new Album("./../resources/images/pyramids.jpg", "Pyramids with Nadja", "Pyramids with Nadja", "Experimental", 8)
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

  public purchases: Album[] = this.createPurchases();
    createPurchases(){
      var purchaseList: Album[] = [];
      this.allAlbums.forEach(function(album){
        if((purchaseList.indexOf(album) === -1) && (album.inCart === false)) {
              purchaseList.push(album);
            }
      });
      return purchaseList;
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
