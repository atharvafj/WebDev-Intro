function validatefname(){
    var firstname=document.forms["myform"]["fname"].value;  
    var value1=firstname.length;
    if (value1<2){
        alert("First Name must be greater than 2 characters!")
        return false;
    } 
}
function validatelname(){
    var lastname=document.forms["myform"]["lname"].value;
    var value2=lastname.length;
    if(value2<2){
        alert("Last Name must be greater than 2 characters!")
        return false;
    }
}
function validatenumber(){
    var number=document.forms["myform"]["cnumber"].value;
    if (Math.log(number)!=10){
        alert("Enter a 10 digit number!")
        return false;
    }
}