class Umbrella{
    constructor(x,y){
        var options={
            'restitution':0,
            'friction':0,
            'density':0
        }
        this.body=Bodies.circle(this.x,this.y,options)
    }
    display(){
        manWithUmbrella.addAnimation(manWithUmbrellaAnimation)
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}