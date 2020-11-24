class Elastic {
    constructor(bodyA, pointB){
        var elastic_options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
        this.elastic = Matter.Constraint.create(elastic_options);
        World.add(world, this.elastic);
        this.pointB = pointB;
    }
    fly(){
        this.elastic.bodyA = null;
    }
    attach(body){
        this.elastic.bodyA = body;
    }
    display(){
        if(this.elastic.bodyA){
            var pointA = this.elastic.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
