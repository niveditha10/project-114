function preload(){
}

function setup(){
canvas=createCanvas(300,300);
canvas.position(500,250);
video=createCapture();
video.hide();

}

function draw(){
    image(video,0,0,300,300);
  }

function take_snapshot(){
    save("myfilterimage.png");
}

loadImage("http://clipart-library.com/image_gallery2/Moustache-PNG-Pic.png");