//Document page loading
$(document).ready(function () {

//array to store inputs from user
var inputs=[""];
 // string to store current string from user
var totalString;
// operator array for validation without .
var op1=["+","-","/","*"];
// operator for . validation
var op2=[". "];
// number validation
 var num = [0,1,2,3,4,5,6,7,8,9];

// function for updating final value to display
    function getValue(input) {

        if(op2.includes(inputs[inputs.length-1]== true && input==="."))
        {
            console.log("Duplicate '.' ");
        }

        else if(inputs.length===1 && op1.includes(input)=== false){

            inputs.push(input);
        }

        else if(op1.includes(inputs[inputs.length-1])=== false){
           inputs.push(input);

        }

        else if(num.includes(Number(input))){
            inputs.push(input);
        }

        update();



    }

//update onclick button    
function update(){
    totalString = inputs.join("");
    $("#steps").html(totalString);

}



function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));

}

$("button").on("click", function(){

       if(this.id==="deleteAll"){
           alert("deletle");
           inputs = [""];
           update();
       }

     else  if(this.id==="backOne"){
           inputs.pop();
           update();
       }

       else  if(this.id==="total"){
          getTotal();
       }

  else {
    if(inputs[inputs.length-1].indexOf("+","-","*","/" ,"-1") === -1){
        getValue(this.id);

    }
       else{this.id}


       }


});


});