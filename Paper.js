class Paper {
 
    constructor(x,y,width,height){
        var options = {
       isStatic:true
        
    }

      this.body = Bodies.circle(250,540,20,options)
      this.width = 33;
      World.add(world,this.body); 
   
     
 }

     display(){
     var pos =this.body.position;
     var angle = this.body.angle;
     rotate(angle);
     rectMode(CENTER);
     fill("brown");
     rect (pos.x, pos.y,this.width,this.height);

}
   }