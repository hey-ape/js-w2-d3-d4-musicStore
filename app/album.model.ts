export class Album {
  public inCart: boolean = false;
  constructor(public name: string, public artist: string, public genre: string, public price: number) { }
}
