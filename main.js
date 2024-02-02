function BMI(){
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));
    
    document.getElementById("result").innerHTML="Your BMI is"+bmio;
if(bmi>25){
    document.getElementById('result2').innerHTML="OVER WEIGHT"
}else if(bmi<18){
    document.getElementById('result2').innerHTML="UNDER WEIGHT"
}else{
    document.getElementById('result2').innerHTML="NORMAL"
}
}