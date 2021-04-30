class Ground
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		
		
		
		this.body=Bodies.rectangle(600,590,1200,15 , options);
		this.width = 1200;
		this.height = 15;
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}