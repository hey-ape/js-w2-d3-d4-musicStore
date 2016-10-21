import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'earworm',
  template: `
  <div class="container">
    <div id="header">
      <img id="logo" src="./../resources/images/logo.png" alt="Earworm">
      <add-review
      [childSelectedAlbum] = "selectedAlbum"
      (doneClickedSender) = "doneReviewing()"
      ></add-review>
      <div class="row">
        <album-filter
          [childGenreList] = "allGenres"
          [childArtistList] = "allArtists"
          (genreSender) = "selectGenre($event)"
          (artistSender) = "selectArtist($event)"
        ></album-filter>
      </div>
    </div>
    <div id="spacer">
    </div>
    <div id="content">
      <div class="row">
        <div class="col-sm-3 well">
          <img class="icon" src="./../resources/images/reviews.png"><hr>
          <review-display
            [reviews] = "reviews"
          ></review-display>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <album-list
              [childAlbumList] = "allAlbums"
              [childSelectedGenre] = "selectedGenre"
              [childSelectedArtist] = "selectedArtist"
              (clickSenderBuy)="buyAlbum($event)"
              (clickSenderReview)="reviewAlbum($event)"
              (doneClickedSender)="doneReviewing($event)"
              [childSelectedAlbum] = "selectedAlbum"
            ></album-list>
          </div>
        </div>
        <div id="cart" class="col-sm-3 well">
          <img class="icon" src="./../resources/images/cart.png"><hr>
          <cart-display
            [total] = "total"
            [purchases] = "purchases"
            (clickSenderRemove)="removeAlbum($event)"
          ></cart-display>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public allAlbums: Album[] = [
    new Album("./../resources/images/thewall.jpg", "The Wall", "Pink Floyd", "Progressive", 10),
    new Album("./../resources/images/modernguilt.jpg", "Modern Guilt", "Beck", "Psychedelic", 11),
    new Album("./../resources/images/ummagumma.jpg", "Ummagumma", "Pink Floyd", "Psychedelic", 9),
    new Album("./../resources/images/wheelsoffire.jpg", "Wheels of Fire", "Cream", "Psychedelic", 9),
    new Album("./../resources/images/unnatural.jpg", "The Unnatural World", "Have a Nice Life", "Post-Punk", 12),
    new Album("./../resources/images/mywoman.jpg", "My Woman", "Angel Olsen", "Alternative", 15),
    new Album("./../resources/images/rosewindows.jpg", "Rose Windows", "Rose Windows", "Psychedelic", 12),
    new Album("./../resources/images/snakehymns.jpg", "Snake Hymns", "Bus Gas", "Drone", 10),
    new Album("./../resources/images/twinpeaks.jpg", "Plays the Music of Twin Peaks", "Xiu Xiu", "Electronic", 8),
    new Album("./../resources/images/theoryofmachines.jpg", "Theory of Machines", "Ben Frost", "Experimental", 10),
    new Album("./../resources/images/celestial.jpg", "Music for the Celestial Din", "Garek Jon Druss", "Experimental", 8),
    new Album("./../resources/images/pyramids.jpg", "Pyramids with Nadja", "Pyramids with Nadja", "Experimental", 8),
    new Album("./../resources/images/surferrosa.jpg", "Surfer Rosa", "Pixies", "Alternative", 8),
    new Album("./../resources/images/ascension.jpg", "Night of Your Ascension", "Wrekmeister Harmonies", "Experimental", 9),
    new Album("./../resources/images/heat.jpg", "Heat & Entropy", "Ben Chatwin", "Modern Classical", 14),
    new Album("./../resources/images/gilescorey.jpg", "Giles Corey",  "Giles Corey", "Gloom", 7),
    new Album("./../resources/images/brightday.jpg", "When Shall This Bright Day Begin", "Jozef van Wissem", "Modern Classical", 12),
    new Album("./../resources/images/requiem.jpg", "Requiem For Hell", "MONO", "Post-Rock", 10),
    new Album("./../resources/images/twdylive.jpg", "Live in Reykjavik", "This Will Destroy You", "Post-Rock", 7),
    new Album("./../resources/images/strangers.jpg", "Strangers", "Marissa Nadler", "Alternative", 9),
    new Album("./../resources/images/tobekind.jpg", "To Be Kind", "Swans", "Industrial", 11),
    new Album("./../resources/images/banana.jpg", "The Velvet Underground & Nico", "The Velvet Underground", "Avant-Garde", 10),
    new Album("./../resources/images/blackearth.jpg", "Black Earth", "Bohren & der Club of Gore", "Jazz", 11),
    new Album("./../resources/images/darkness.jpg", "Angels of Darkness, Demons of Light I", "Earth", "Post-Rock", 10),
    new Album("./../resources/images/stench.jpg", "Stench of Exist", "Boduf Songs", "Gloom", 8),
    new Album("./../resources/images/ii.jpg", "II", "Innercity Ensemble", "Jazz", 5),
    new Album("./../resources/images/newkanada.jpg", "Slow Riot for New Zero Kanada", "Godspeed You! Black Emperor", "Post-Rock", 10),
    new Album("./../resources/images/abyss.jpg", "Abyss", "Chelsea Wolfe", "Industrial", 9),
    new Album("./../resources/images/kveikur.jpg", "Kveikur", "Sigur Rós", "Post-Rock", 12),
    new Album("./../resources/images/rituals.jpg", "Rituals, Trances & Ecstasies", "Kithkin", "Tree-Punk", 10),
    new Album("./../resources/images/thisfool.jpg", "This Fool Can Die Now", "Scout Niblett", "Alternative", 10),
    new Album("./../resources/images/hawk.jpg", "Hawk", "Mark Lanegan & Isobel Campbell", "Alternative", 10),
    new Album("./../resources/images/lightfalls.jpg", "Light Falls", "Wrekmeister Harmonies", "Experimental", 10),
    new Album("./../resources/images/onesandsixes.jpg", "Ones and Sixes", "Low", "Slowcore", 10),
    new Album("./../resources/images/smilewound.jpg", "Smilewound", "múm", "Electronic", 11),
    new Album("./../resources/images/lostthemes.jpg", "Lost Themes", "John Carpenter", "Electronic", 10),
    new Album("./../resources/images/skeletontree.jpg", "Skeleton Tree", "Nick Cave and the Bad Seeds", "Avant-Garde", 13),
    new Album("./../resources/images/doomed.jpg", "...Is Doomed", "Black Wing", "Electronic", 8),
    new Album("./../resources/images/blacktar.jpg", "Black Tar Prophecies Vols. 4, 5, & 6", "Grails", "Post-Rock", 9),
    new Album("./../resources/images/jarboe.jpg", "Jarboe & Helen Money", "Jarboe & Helen Money", "Experimental", 9)
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

  public purchases: Album[] = [];
  public total: number = 0;

  buyAlbum(album: Album) {
    album.inCart = true;
    if (this.purchases.indexOf(album) === -1) {
      this.purchases.push(album);
      this.total += album.price;
    } else {
      alert("This album is already in your cart!")
    }
  }

  removeAlbum(album: Album) {
    album.inCart = false;
    var index = this.purchases.indexOf(album, 0);
      if(index > -1) {
      this.purchases.splice(index, 1);
      this.total -= album.price;
    }
  }

  addTotal(){
    for(var i=0; i<this.purchases.length; i++){
      console.log(this.purchases);
    }
  }

  selectedAlbum: Album = null;
  reviewAlbum(clickedAlbum: Album) {
    this.selectedAlbum = clickedAlbum;
  }

  public reviews: Album[] = [];
  doneReviewing() {
    var _this = this;
    this.allAlbums.forEach(function(album){
      if ((album.review !== "") && (_this.reviews.indexOf(album) === -1)){
        _this.reviews.push(album);
      }
    });
    console.log(_this.reviews);
    this.selectedAlbum = null;
  }

  selectedGenre: string = "all";
  selectedArtist: string = "all";

  selectGenre(genre: string) {
    this.selectedGenre = genre;
  }

  selectArtist(artist: string) {
    this.selectedArtist = artist;
  }

}
