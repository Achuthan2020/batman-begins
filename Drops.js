class Drops{
    constructor(x,y){
        var options={
            'restitution':0.3,
            'friction':0.2,
            'density':0.5
        }
        this.body=Bodies.circle(this.x,this.y,options)
        this.x=x
        this.y=y
    }
    display(){
        var maxDrops=100
        for(var i=0;i<maxDrops;i++){
            drops.push(new createDrop(random(0,400)));
            
        }
    }
}