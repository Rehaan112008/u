class fall{
    constructor(x,y){
     var options={
       restitution:1  
     }   
     this.body=Bodies.rectangle(x,y,10,10,options)
     this.image=loadImage("snow4.webp")
     this.width=10;this.height=10;
     World.add(world,this.body)
    }
    display(){
     image(this.image,this.body.position.x,this.body.position.y,10,10)   
    }
}