export class Recipe {
  public name!: string;
  public description!: string;
  public imgUrl!: string;

  constructor(name: string, desc: string, image: string) {
    this.name = name;
    this.description = desc;
    this.imgUrl = image;
  }
}
