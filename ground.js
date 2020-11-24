class Ground {
    constructor(x,y,width, height){
        var ground_options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height, ground_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("turquoise");
        rect(position.x, position.y, this.width, this.height);
    }
}