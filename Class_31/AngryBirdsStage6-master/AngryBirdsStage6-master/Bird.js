class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.tjr = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x > 10 &&this.body.position.x > 200 ){
  var pos = [this.body.position.x,this.body.position.y];
  this.tjr.push(pos)
  for(var i = 0; i <this.tjr.length; i++ ){
    image(this.smokeimage,this.tjr[i][0],this.tjr[i][1])
  }
    }
   
    super.display();
  }
}
