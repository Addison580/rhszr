function setup(){
    canvas=createCanvas(600, 500);
    canvas.position(900, 100);
    video=createCapture(VIDEO);
    video.size(600, 500);
    video.position(100, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    background('#35d59c');
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');

}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
}

}
    