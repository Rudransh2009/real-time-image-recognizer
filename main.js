function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/D2snoW_0y/model.json",modelloded)
}

function modelloded()
{
    console.log("modelloded!")
}

function draw()
{
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function gotResult(error,result)
{
 if (error)
 {
     console.log(error)
 }
 else 
 {
     console.log(result)
     document.getElementById("result_object_name").innerHTML=result[0].label ;
     document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed[3] ;
    }
}
