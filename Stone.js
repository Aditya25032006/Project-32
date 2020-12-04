class Stone{
    constructor(x,y,width,height){
        var options={
            'restitution':0,
            'isStatic':false,
            'friction':1,
            'density':1.2
        }
        this.stone = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
      
        World.add(world,this.stone);
    }

    display(){
       // var pos =this.body.position;
        rectMode(CENTER);
        fill("darkblue");
        rect(this.stone.position.x, this.stone.position.y, this.width, this.height);
    }
}