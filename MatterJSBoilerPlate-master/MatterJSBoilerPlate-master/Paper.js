class Paper {
    constructor(x, y, radius) {
    var c = {
        'restitution':0.8,
        'friction':1.5,
        'density':1.0
    }
    this.radius= radius;
    this.body = Bodies.circle(x, y,radius, c);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill("red");
    ellipse(pos.x, pos.y, this.radius);
  }
}