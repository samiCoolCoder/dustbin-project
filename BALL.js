class ball2

{
    constructor(x,y)
    {
        var option={
            'restitution':0.5,
            'density':1,
            'friction':0.4
        }
       // this.radius=70
        this.body=Bodies.circle(x,y,70,option);
        World.add(world,this.body);
        this.image=loadImage("paper.png")
      
    }

    display()
    {
       // fill("magenta")
      //  ellipseMode(RADIUS)
       // ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
       imageMode(RADIUS)
       image(this.image,this.body.position.x,this.body.position.y,70,70)
    }
}