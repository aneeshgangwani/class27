class Sling{
    constructor(body1,body2){
        var option={
            bodyA:bird.body,
            bodyB:constraintLog.body,
            stifness:0.04,
            lenght:10
        }
        this.sling= Constraint.create(option);
        World.add(world,this.sling);
    
    }
    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;   
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}