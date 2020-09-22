class Corona extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/corona.png");
    this.qwert=225;
  }
display(){
  if(this.body.speed>3){
    World.remove(world,this.body);
    push();
    this.qwert=this.qwert-3;
    tint(225,this.qwert);
    image(this.image,this.body.position.x, this.body.position.y,100,100);

    pop();
  }
  else{
    super.display()
  }
  }

};
