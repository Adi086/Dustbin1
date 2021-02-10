class Dustbin {
    constructor(x,y,width,height) {
      var b = {
          isStatic: true
      }
      this.width = width;
      this.height = height;


      this.body = Bodies.rectangle(x,y,width,height,b);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };