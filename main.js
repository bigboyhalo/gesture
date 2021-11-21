Webcam.set(
    {
      width:350,
      height:300,
      image_format:'png',
      png_quality:90

    }
);

camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>";
    });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1bEe_1LmM/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}

function gotresult(error,results){
    if (error) {
        console.error(error);
    }
    else{
        document.getElementById("result_object_name").innerHTML=results[0].label;
        gesture=results[0].label;
        if (gesture=="exellent") {
            document.getElementById("result_object_gesture_icon").innerHTML="&#28076";
        }
        else if (gesture=="victory") {
            document.getElementById("result_object_gesture_icon").innerHTML="&#9996";
        } 
        else if (gesture=="best") {
            document.getElementById("result_object_gesture_icon").innerHTML="&#128077";
        } 
    }
}