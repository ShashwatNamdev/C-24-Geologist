class Rubber{
    constructer(x,y,width,height,angle){
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.ellipse(x,y,radius,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        // rectMode(CENTER);
        // fill("");
        ellipse(0,0,this.radius);
        pop();
      }
};