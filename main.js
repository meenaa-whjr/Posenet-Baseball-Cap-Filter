var xpos=0;
var ypos=0;
function preload(){
    baseballcap=loadImage("cap.png");

}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
    poseNet = ml5.poseNet(webcam,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function draw(){
    image(webcam,0,0,400,400);
    image(baseballcap,xpos-200,ypos-300,200,200);

}

function modelLoaded(){
    console.log('Posenet is activated');
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    xpos=results[0].pose.nose.x;
    ypos=results[0].pose.nose.y;
    }
}

function takesnapshot(){
    save("cap_selfie.png");
}