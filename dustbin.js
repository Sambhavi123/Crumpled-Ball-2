class dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=213;
        this.wallThickness=20;
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true}) 
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        World.add(world, this.bottomBody)
        World.add(world, this.leftWallBody)
        World.add(world, this.rightWallBody);  
}
    display(){
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var posRight=this.rightWallBody.position;
     
    
     push(); 
     translate(posLeft.x, posLeft.y);
     rect(posLeft.x,posLeft.y,this.wallThickness, this.dustbinHeight);
     rectMode(CENTER); 
     //angleMode(RADIANS); 
     fill(255);
     // rotate(this.angle) ; 
     pop();

    push(); 
    translate(posRight.x, posRight.y);
    rect(posRight.x,posRight.y,this.wallThickness, this.dustbinHeight);
    rectMode(CENTER);
    //angleMode(RADIANS); 
    fill(255);
    //rotate(-1*this.angle) ; 
    pop();
    
    push(); 
    translate(posBottom.x,posBottom.y-100);
    rect(posBottom.x,posBottom.y,this.dustbinHeight+200,this.wallThickness);
    rectMode(CENTER);
    angleMode(RADIANS); 
    fill(255);
    //rotate(-2*this.angle) ; 
    pop();
    
    
        }
    
}
