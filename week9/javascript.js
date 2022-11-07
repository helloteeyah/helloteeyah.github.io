/*instruction:
1. move your mouse along x or y axis to see different effect
2. press key "r" or "b" to switch back and forth from red and blue scenes
*/

let img;
let cam;

let KeyIsPressedToRestart = false;
let state = 1;

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("canvas");
  cam = createCapture(VIDEO);
  cam.hide();
  img = createImage(640, 480);
}

function draw() {
  background(0);
  cam.loadPixels();
  img.loadPixels();

  if (state == 1) {
    pixel1();
  } else if (state == 2) {
    pixel2();
  }

  KeyIsPressedToRestart = key == "r";

  img.updatePixels();
  image(img, 0, 0);
}

function pixel1() {
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let idx = (x + y * img.width) * 4;

      let r = cam.pixels[idx + 0];
      let g = cam.pixels[idx + 1];
      let b = cam.pixels[idx + 2];

      let avg = (r + g + b) / 3;

      let threshold = 80;
      threshold = map(mouseX, 0, 640, 80, 120);
      let color = 100;
      color = map(mouseY, 0, 480, 100, 230);

      if (avg > threshold) {
        img.pixels[idx + 0] = color; // R
        img.pixels[idx + 1] = 255; // G
        img.pixels[idx + 2] = 255; // B
        img.pixels[idx + 3] = 255; // A
      } else {
        img.pixels[idx + 0] = 0; // R
        img.pixels[idx + 1] = 0; // G
        img.pixels[idx + 2] = 0; // B
        img.pixels[idx + 3] = 255; // A
      }
    }
  }
  if (KeyIsPressedToRestart == false && (key == "r") == true) {
    state = 2;
  }
}

function pixel2() {
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let idx = (x + y * img.width) * 4;

      let r = cam.pixels[idx + 0];
      let g = cam.pixels[idx + 1];
      let b = cam.pixels[idx + 2];

      let avg = (r + g + b) / 3;

      let threshold = 80;
      threshold = map(mouseX, 0, 640, 80, 120);
      let color = 100;
      color = map(mouseY, 0, 480, 100, 230);

      if (avg > threshold) {
        img.pixels[idx + 0] = 255; // R
        img.pixels[idx + 1] = color; // G
        img.pixels[idx + 2] = 255; // B
        img.pixels[idx + 3] = 255; // A
      } else {
        img.pixels[idx + 0] = 0; // R
        img.pixels[idx + 1] = 0; // G
        img.pixels[idx + 2] = 0; // B
        img.pixels[idx + 3] = 255; // A
      }
    }
  }
  if (KeyIsPressedToRestart == false && (key == "b") == true) {
    state = 1;
  }
}
