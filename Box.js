//design/blueprint of the objects
//properties and function of the object

class Box{
    //properties
    constructor(x,y,width,height){
        var options={
            restitution:1
        }
       this.body=Bodies.rectangle(x,y,width,height,options)
       this.width=width;
       this.height=height;
       World.add(world,this.body);
    }

    //function
    display(){
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(this.body.angle)
        rect(0,0,this.width,this.height);
        pop();
    }

    //o/////////////
    ///////////////
    ///////o///////
}