class Rubber{
    constructer(x,y,radius){
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.ellipse(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        // var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        // rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
      }
};