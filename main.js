function setup(){
    canvas = createCanvas(300,300) ;
   canvas.center();
   video = createCapture(VIDEO);
  
   video.hide();
   classifier=ml5.imageClassifier("",modelLoaded);
  
}
function modelLoaded(){
    console.log("modelloaded");

}
function draw(){
    image(video,0,0,304,304);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
  if (error){
      console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("ans_obj").innerHTML=results[0].label;
    document.getElementById("ans_acc").innerHTML=results[0].confidence.toFixed(2);
  }
}
function preload(){

}
