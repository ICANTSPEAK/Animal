

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/90D4q-3Qp/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}