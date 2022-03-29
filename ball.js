class Ball {
    constructor(x,y,r) {
        var ball_options={
            isStatic:false,
            restitution:0.8,
            friction:0,
            density:0.5
        }
          this.ball = Bodies.circle(x, y, r/2, ball_options);
          World.add(world, this.ball)
          this.r = r

    }
    display() {
        ellipseMode(CENTER)
        ellipse(this.ball.position.x, this.ball.position.y, this.r)
    }
  }