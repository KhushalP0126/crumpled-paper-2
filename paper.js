class paper{
  constructor(x,y,width, height){
      var options= {
          restitution: 0.1,
          friction: 2.0,
          isStatic:false
      }
      this.body = Bodies.circle(x,y,width, height);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/paper1.jpg");
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      scale(0.02,0.04);
      image(this.image,0,0,width,height);
      pop();
  }
}