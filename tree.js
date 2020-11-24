class Tree {
    constructor(x,y, radius){
        var tree_options ={
            friction:0.5,
            density:1,
            restitution:0,
            isStatic:true
        }
        this.image = loadImage("Plucking mangoes/tree.png");
        this.radius = radius;
        this.body = Matter.Bodies.circle(x,y,this.radius/2, tree_options);
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        imageMode(CENTER);
        image(this.image, position.x, position.y, this.radius, this.radius);
    }
}
