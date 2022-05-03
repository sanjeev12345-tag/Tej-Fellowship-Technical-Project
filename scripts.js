function sayHello() {
               alert("Hello There!")
            }
function alertLoad(){
               alert("Hello TEJ!")
     	 }
		 
		 
var count=document.getElementById("qtybox");   //to set count value whichever is set initial va1ue

function increValue(){
	            
				count ++;            //incr count var value
				
				document.getElementById('qtybox').value= count;   //set value in the text field

 }
function decreValue(){

	if (count<=0){                   
	     document.getElementById('qtybox').value=0;  //set value in the text field
	 }
	 else{
	 count --;                 //decr count var value
	 document.getElementById('qtybox').value= count;  //set value in the text field
	 }
}





















		 
