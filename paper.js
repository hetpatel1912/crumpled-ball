class Paper {
    constructor(){
        var options ={
            isStatic: true,
            restitution:0.3,
            friction:0,
            density :1.2
        }

        this.x=x
        this.y=y
        this.r=r
        this.image = loadImage("paper.png")
        this.body = Bodies.circles(this.x,this.y,(this.r-20)/2,options)
        World.add(world,this.body)
    }
    display(){
        paperpos = this.body.position
        push()
        translate(paperpos.x,paperpos.y)
        fill(255,0,255)
        imageMode(CENTER);
			image(this.image, paperpos.x, paperpos.y,paperpos.r)
    }
}