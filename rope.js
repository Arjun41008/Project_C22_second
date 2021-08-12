class rope{
  constructor(body1,body2,pointA,pointB){
	
	this.pointA = pointA;
	this.pointB = pointB;

	var options = {
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA,y:this.pointB}
	}

	var ropeCon = Matter.Constraint.create(options);

	World.add(world,ropeCon);
	
	this.bodyA = body1;
	this.bodyB = body2;

   }

	 display(){
		 
		var pointA = this.bodyA.position;
		var pointB = this.bodyB.position;

		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
	} 

}
