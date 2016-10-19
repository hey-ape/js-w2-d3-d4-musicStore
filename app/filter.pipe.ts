import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Album[], desiredGenre, desiredArtist) {
    var output: Album[] = [];
    if (desiredGenre === "all" && desiredArtist === "all"){
      return input;
    } else if (desiredArtist === "all") {
      for (var i = 0; i < input.length; i++) {
        if ((input[i].genre === desiredGenre)) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "all") {
      for (var i = 0; i < input.length; i++) {
        if ((input[i].artist === desiredArtist)) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      for (var i = 0; i < input.length; i++) {
        if ((input[i].genre === desiredGenre) && (input[i].artist === desiredArtist)) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
