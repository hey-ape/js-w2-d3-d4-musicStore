export class Album {
  public inCart: boolean = false;
  public review: string;
  constructor(public image: string, public name: string, public artist: string, public genre: string, public price: number) { }
}
