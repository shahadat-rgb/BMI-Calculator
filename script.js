function getBmiValue(params) {
    weight= document.getElementById("weight").value;
    height= document.getElementById("height").value;
    
    height =height * 12;
    height = height * 0.025;
    var newBmiValue=  weight / (Math.pow(height,2))

     newBmiValue = Math.round(newBmiValue)

    document.getElementById("bmiValue").value = newBmiValue;

    if ( newBmiValue < 19  ) {
       var footer=  document.getElementById("footer");
            footer.innerHTML="Your weight is very low.because best and good healthy BMI ranges are between 19 and 25"
            footer.className= "text-danger text-center card-footer";
            footer.style.fontSize='20px'
   }  
    
    else  if ( newBmiValue >= 19 && newBmiValue <= 25  ) {
           var footer  =  document.getElementById("footer");
            footer.innerHTML="Your weight is very good and healthy."
            footer.className= "text-success text-center card-footer";
            footer.style.fontSize='20px'
    
   } 
    else if (newBmiValue >= 26 && newBmiValue <= 30 ) {
        var footer=  document.getElementById("footer");
            footer.innerHTML="Your weight is not good (overweight).because best and good healthy BMI ranges are between 19 and 25"
            footer.className= "text-danger text-center card-footer";
            footer.style.fontSize='20px'
    
   }
   else if (newBmiValue >= 31) {
    var footer=  document.getElementById("footer");
            footer.innerHTML="Your weight is very nothing (very fat).because best and good healthy BMI ranges are between 19 and 25"
            footer.className= "text-danger text-center card-footer";
            footer.style.fontSize='20px'
   }
}
 