let timeslider;
let tempslider;
let playenglish;
let playjapanese;
let playkorean;

let img;
let userimg;
let userimage;

let snowflakes = [];
let count = 280;


function setup() {
  createCanvas(windowWidth, windowHeight);
  timeslider = document.getElementById('time');
  tempslider = document.getElementById('temp');
  playenglish = document.getElementById("eng_song");
  playjapanese = document.getElementById("japan_song");
  playkorean = document.getElementById("korean_song");
  document.getElementById("upload");
  input_img = createFileInput(handleFile);
  input_img.position(80,420);

  
  for (let i = 0; i < count; i++) {
    snowflakes.push(new Snowflake(random(width), random(height)));
  }

}

function playEng() { 
    playenglish.play(); 
    playkorean.pause(); 
    playjapanese.pause();
  } 
  
function playJapan() { 
    playjapanese.play(); 
    playenglish.pause(); 
    playkorean.pause(); 
  } 

function playKorean() { 
    playkorean.play(); 
    playjapanese.pause();
    playenglish.pause(); 
} 

function pause() { 
    playkorean.pause(); 
    playjapanese.pause();
    playenglish.pause(); 
} 



function draw() {

  let time = int(timeslider.value);
  let temp = int(tempslider.value);

  background(225, 225, time);

  for (let i = 0; i < min(temp); i++) {
    snowflakes[i].display();
    snowflakes[i].update();
  }

  drawMonster(width / 2, height / 1.6);

  push()
  text("")
  let c = color('#f5f7eb');
  noStroke()
  rectMode(CENTER);
  fill(215, 179, 227,110)
  rect(222.5,425,317,52);
  fill(245, 247, 235,110)
  rect(222.5,425,315,50);
  pop()


}

function drawMonster(x, y) {
  let a = 0;
  let b = -70;
  push();
  translate(x, y);
  strokeWeight(1.5);
  drawHead(0, 0);
  drawHat(0, -118, 3 * sin(frameCount * 0.08));
  drawEye(20, -90);
  drawEye(-20, -90);
  drawMouth(0, -68);
  rotate(a);
  let sinValue = sin(frameCount * 0.05);
  let angle = map(sinValue, 1, 2, 0, 100);
  drawArm(57, 31, true, radians(angle));
  drawArm(-57, 31, false, radians(angle));
  noStroke();
  arc(0, 180, 500,180,PI,0)
  drawBody(0, 62);

  pop();
}

function drawHead(x, y) {
    if (img == null){
        push();
        translate(x, y);
        fill("white");
        noStroke();
        ellipse(0, -80, 110, 108);
        pop();
        } else {
          imageMode(CENTER);
          image(img,0,-80,110,108);
        }
      
}

function drawHat(x, y, b) {
  push();
  translate(x, y);
  fill(0, 0, 0);
  noStroke();
  triangle(40, 0, 0, b - 70, -40, 0);
  ellipse(0, b, 200, 20);
  pop();
}

function drawArm(x, y, mirror, a) {
  push();
  translate(x, y);
  rotate(a);
  if (mirror == true) {
    scale(-1, 1);
  }

  strokeWeight(3.5);
  line(0, 0, -100, -80);

  pop();
}

function drawEye(x, y) {
  push();
  translate(x, y);
  fill(0, 0, 0);
  ellipse(0, 0, 10, 10);
  pop();
}

function drawMouth(x, y) {
  push();
  translate(x, y);
  fill(255, 100, 100);
  noStroke();
  arc(0, 0, 50, 50, 0, PI);
  pop();
}

function drawBody(x, y) {
  push();
  translate(x, y);
  noStroke();
  ellipse(0, 0, 180, 180);
  fill("black");
  ellipse(0, 0, 12, 12);
  ellipse(0, 40, 12, 12);
  ellipse(0, -40, 12, 12);
  pop();
}
class Snowflake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scale = random(1, 3);
    this.speedY = random(0, 5);
  }

  update() {
    this.y = this.y + this.speedY;
    if (this.y > height) {
      this.y = 0;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scale);
    stroke(255, 100);
    strokeWeight(1);
    line(0, 0, 10, 10);
    line(10, 0, 0, 10);
    line(5, -2, 5, 12);
    line(-2, 5, 12, 5);
    pop();
  }
}


function handleFile(file) {
    print(file);
    if (file.type == 'image') {
      img = createImg(file.data, 'testImg');
      img.hide();
      console.log(img)
    } else {
      img = null;
    }
  }