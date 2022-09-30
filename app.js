
// function getEmail(){
//      var email = document.getElementById("email")
//      for (var i = 0; i < email.length; i++){
//         if (email.chartAt(i) !== "@email.com"){
//             alert("Please Enter a valid email");
//             break;
//         }
//         return email;
//      }
// }


function myFun(){
    var correct_way = /^[A-Za-z]+$/;
    var zip = document.getElementById("zip").value;
    var a = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var con = document.getElementById("con").value;

    if(a == ""){
        alert("Please Fill user name");
        return false;
    }
    if (a.length < 3){
        alert("First name should be three character");
        return false; 
    }
    if (a.length >20){
        alert("First name should be less than 20 character");
        return false; 
    }
    if (a.match(correct_way))
        true;
        else{
            alert("Only alphabets")
        }
    if(lname == ""){
        alert("Please Fill last name");
        return false;
    }    
    if(email == ""){
        alert("Please Fill email");
        return false;
    }    
    if(con == ""){
        alert("Please Fill contact");
        return false;
    }
    if(zip == ""){
        alert("Please Fill zip code");
        return false;
    }
    if(isNaN(con)){
        alert("Please Enter a number in contact Number")
        return false;
    }
    if(con.length != 11){
        alert("Mobile number should be 11 digit")
        return false;
    }
    if(email.indexOf('@') <= 0){
        alert("@ invalid position")
        return false;
    }
    if((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')){
        alert(". Invalid position in email")
        return false;
    }
    if(isNaN(zip)){
        alert("zip code should be in digit only");
        return false;
    }
    if(zip.length != 6){
        alert("Zip code should be six digit")
        return false;
    }
    if(!NaN(a)){
        alert("Only character allow")
        return false;
    }

}