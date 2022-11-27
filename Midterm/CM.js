function Valid() {
 if (!firstName() ||
      !Email()    ||
      
      !Username()) {
   return errorMessages.length === 0;
 }
 else
   return false;
}
 
//FirstName.addEventListener('blur', firstName, false);
   var validFirstname=false;

function firstName(){
   //1) Create variable
   //2) read value from HTML
   var firstname = document.getElementById("FirstName").value;
   var errorMessages = "";
   //3) Do validation
   if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
       errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
       console.log("First name invalid — length")
       } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
           errorMessages += "<p>Invalid caracter in name (accepts only A-Z, a-z, and ,.'-)</p>";
           console.log("First name invalid — bad characters")
       } else {
               validFirstname = true;
               console.log("First name valid")
       };
   //4) Send error message to HTML
   document.getElementById("fname").innerHTML = errorMessages;
   //5) return status of each field
   return (validFirstname);
}

function Email(){
 console.log("Email")
//1) creat var.
var validUsername=false;
 //2) read html value
var userEmail = document.getElementById("Email").value;
var errorMessages = "";
//3 validations
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
   errorMessages += "<p>Email not vaild</p>";
} else
   return true;
//4 error
 document.getElementById("fname").innerHTML = errorMessages;
 }




function Username(){
//1) Create variable
var validUsername=false;
//2) read value from HTML
var username = document.getElementById("Username").value;
var errorMessages = "";
//3) Do validation
if (username==="null" || username==="" || username.length > 12 ) {
       errorMessages += "<p>not vaild Username</p>";
             } 
  else
      return true
             
       
//4) Send error message to HMTL
document.getElementById("fname").innerHTML = errorMessages;

}


