// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//My function below
var chars = [
  U = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  L = "abcdefghijklmnopqrstuvwxyz",
  S = " !@#$%^&*()\"':;()-_=+`~,<.>/?[]{}\\",
  N = "1234567890"
];
var Choices = { //Not technically an array its technically an object
 nums: true,
 lows: true,
 ups: true,
 specs: true,
 span: 4,
}

function UpperCase(){
  var Uppers = window.prompt("Do you want Uppercase letters in it? Y/N");
 Uppers = Uppers.toUpperCase(); //I believe this may be uneeded due to the .toUpperCase above
 console.log(Uppers);
  while(Uppers != "YES" && Uppers != "NO"){
    if(Uppers === "YES"|| Uppers === "Y"){
      Uppers = "YES";
      window.alert("Noted");
      console.log(Uppers);
      break;
    } else if(Uppers === "NO" || Uppers === "N"){
      window.alert("Noted");
      Uppers = "NO";
       Choices.ups = false;
       console.log(Uppers);
       console.log(Choices);
       break;
    }else {
      window.alert("You need to only put Yes or No.");
      UpperCase();
      break;
    }
    
  }

}
function LowerCase(){

  var Lowers = window.prompt("Do you want Lowercase letters in it? Y/N");
 Lowers = Lowers.toUpperCase(); //I believe this may be uneeded due to the .toUpperCase above
 console.log(Lowers);
  while(Lowers != "YES" && Lowers != "NO"){
    if(Lowers === "YES"|| Lowers === "Y"){
      Lowers = "YES";
      window.alert("Noted");
      console.log(Lowers);
    } else if(Lowers === "NO" || Lowers === "N"){
      window.alert("Noted");
      Lowers = "NO";
       Choices.lows = false;
       console.log(Lowers);
       console.log(Choices);
       break;
    }else {
      window.alert("You need to only put Yes or No.");
      LowerCase();
      break;
    }
    
  }

}

function Numbers(){
  let Numberz = window.prompt("Do you want to include numbers in the array? Y/N ");
  Numberz = Numberz.toUpperCase();
  console.log(Numberz);
   while(Numberz != "YES" && Numberz != "NO"){
     if(Numberz === "YES"|| Numberz === "Y"){
       Numberz = "YES";
       window.alert("Noted");
       console.log(Numberz);
     } else if(Numberz === "NO" || Numberz === "N"){
       window.alert("Noted");
       Numberz = "NO";
        Choices.nums = false;
        console.log(Numberz);
        console.log(Choices);
        break;
     }else {
       window.alert("You need to only put Yes or No.");
       Numbers();
       break;
     }
     
   }

}
function range(){
  var length = Number(window.prompt("How long do you want the password? 8-128 characters."));
  //including Number(window.prompt) defaults the reply as a type number. DOPE.
    console.log(length);
    console.log(typeof length);
        if(isNaN(length)){
      window.alert("Enter a NUMBER between 8-128");
      range();
    }
      while(length < 8 || length > 128){
        window.alert("Your input is outside of the range. Please pick a number between 8-128");
        var length = Number(window.prompt("How long do you want the password? 8-128 characters."));
        if(8 > length > 128){
          window.alert("Thank you. You chose: " + length);
          Choices.span = length;
          console.log(Choices);
          break
        } else {
          range();
          break;
        } 
      }
      console.log(Choices);
    }
      

 
function generatePassword(){

  UpperCase();
  LowerCase();
  Numbers();
  range();
  console.log(Choices);
    

    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
