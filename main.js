leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(600, 550);
    video.position(150, 250)

    canvas = createCanvas(600, 550);
    canvas.position(1060, 250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Posenet is Initialized!");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left Wrist X = " + leftWristX + " Right Wrist X " + rightWristX + " Difference = " + difference);
    }
}
function draw() {
    background('#add8e6');
    document.getElementById("fontsize").innerHTML = "The font size of the text will be " + difference + "px";
    fill('#800000');
    text('Karthik', 50, 400);
    textSize(difference);
}



