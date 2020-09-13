class Paper
{
    constructor(x,y,radius)
    {
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body = Bodies.circle(x,y,radius,option);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        fill("purple");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,radius);
    }
}