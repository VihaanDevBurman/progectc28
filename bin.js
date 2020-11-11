class Bin {
    constructor() {
      var options = {
        isStatic: true
          
      }
      this.image=loadImage("dustbingreen.png");
      this.bottom = Bodies.rectangle(800, 780, 200, 20, options);
      this.width = 200;
      this.height = 20;

      this.left = Bodies.rectangle(700, 780, 20, 200, options);
      this.width1 = 20;
      this.height1 = 200;

      this.right = Bodies.rectangle(900, 780, 20, 200, options);
      this.width2 = 20;
      this.height2 = 200;

      World.add(world, this.bottom);
      World.add(world, this.left);
      World.add(world, this.right);
    }
    display(){
      var bottom=this.bottom.position;
      var right=this.right.position;
      var left=this.left.position;
     
     
      
      rectMode(CENTER);
      
      fill("white");
      //rect(bottom.x,bottom.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image,bottom.x,680,200,200);
      rect(right.x,right.y, this.width2, this.height2);
      rect(left.x,left.y, this.width1, this.height1);
    }
  };