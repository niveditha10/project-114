function preload(){
loadImage("http://clipart-library.com/images_k/lips-transparent/lips-transparent-1.png")
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture();
video.hide();

}

function draw(){
    image(video,0,0,300,300);
  }
 
function take_snapshot(){
    save("myfilterimage.png");
}