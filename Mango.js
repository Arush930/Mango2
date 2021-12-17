class Mango {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution : 0,
          friction : 0
      }
      this.body = Bodies.circle(x,y,50,options);
      this.radius = 50
      World.add(world, this.body);
      this.image = loadImage("mango.png")
    }
   
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("blue");
      image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
  };