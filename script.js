var x, y, m , n, s, t, v

function setup() {
  createCanvas (500,400);

  x = 0;
  y = 200;
  m = 200;
  n = 0;
  s = 200;
  t = 0;
  vx = 5;
  vy = 5;
  vm = 8;
  vn = 8;
  vs = 3;
  vt = 3;
}

function draw() {
  background(225);

  ellipse (x, y, 50, 50);
  fill ('rgba(100%,0%,100%,0.5)');
  x = x + vx;
  y = y + vy;

  if (x < 0 || x > 500) {
    vx = vx * -1
  }

  if (y < 0 || y > 400) {
    vy = vy * -1
  }

  ellipse (m, n, 50, 50);
  fill ('#fae');
  m = m + vm;
  n = n + vn;

  if ( m < 0 || m > 500) {
    vm = vm * -1
  }

  if (n < 0 || n > 400) {
    vn = vn * -1
  }

  ellipse (s, t, 60, 60);
  fill (255, 204, 100)
  s = s + vs;
  t = t + vt;

  if ( s < 0 || s > 500) {
    vs = vs * -1
  }

  if (t < 0 || t > 400) {
    vt = vt * -1
  }

}


class Ball {
  constructor(x, y, w, h, vx, vy)
  this.x = x;
  this.y = ;
  this.w = w;
  this.h = h;
  this.vx = vx;
  this.vy = vy;

  drawBall(){
    ellipse (this.x, this.y, 50, 50);
    this.x = x + vx;
    this.y = y + vy;

    if (this.x < 0 || this.x > 500) {
    this.vx = vx * -1
   }

   if (this.y < 0 || this.y > 400) {
    this.vy = vy * -1
  }
  }
}