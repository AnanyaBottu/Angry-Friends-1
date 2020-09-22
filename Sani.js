class Sani extends BaseClass {
  constructor(x, y){
    super(x,y,150,100);
    this.image = loadImage("sprites/sani.png");
    this.qwerty=255;
  }

  display() {
  if(this.body.speed>3){
    World.remove(world,this.body);
    push();
    this.qwerty=this.qwerty-3;
    tint(225,this.qwerty);
    image(this.image,this.body.position.x, this.body.position.y,50,50);

    pop();
  }
  else{
    super.display()
  }
}

};
