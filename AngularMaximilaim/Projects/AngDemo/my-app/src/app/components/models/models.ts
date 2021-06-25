export class Recipe 
{
  public name:string;
  public description:string;
  public imagePath:string;

  constructor(name:string,desc:string,imagePath:string)
  {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }

}

export class Ingradient
{
  constructor(public name:string,public amount:number){}
}

export class ServerModel
{
  constructor(public type:string,public name:string,public content:string){}

}