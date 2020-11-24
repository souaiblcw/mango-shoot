class Mango {
constructor(x,y,radius){
var mango_options ={
    friction: 1,
    isStatic:true,
    restitution:0
}
this.image = loadImage("Plucking mangoes/mango.png");
this.radius = radius;
this.body = Matter.Bodies.circle(x,y,this.radius/2, mango_options);
World.add(world, this.body);
}
display(){
    var position = this.body.position;
    imageMode(CENTER);
    image(this.image, position.x, position.y, this.radius, this.radius);
}
}
