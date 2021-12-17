class Stone {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution : 0,
          friction : 0
      }
      this.body = Bodies.circle(x,y,100,options);
      this.radius = 100
      World.add(world, this.body);
      this.image = loadImage("stone.png")
    }
   
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
  };
  