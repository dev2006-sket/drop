class man extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("images/walking_1.png");
      this.image = loadImage("images/walking_2.png");
      this.image = loadImage("images/walking_3.png");
      this.image = loadImage("images/walking_4.png");
      this.image = loadImage("images/walking_5.png");
      this.image = loadImage("images/walking_6.png");
      this.image = loadImage("images/walking_7.png");
      this.image = loadImage("images/walking_8.png");
      this.Visiblity = 255;
    }
  
   display(){
     console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
     
   }
  
  
  
  };