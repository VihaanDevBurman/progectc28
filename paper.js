class Paper{
    constructor(x,y,r) {
        var options={

            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("paper.png");
        this.r=r;
        this.body=Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);

    }
       display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
imageMode(CENTER)
image(this.image,0,0,40,40);
fill("yellow");

pop();
;

       } 
    
}
