// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var list = ' ';

//My function below
function UpperCase(){
  var Uppers = window.prompt("Do you want Uppercase letters in it? Y/N");
 Uppers = Uppers.toUpperCase(); //I believe this may be uneeded due to the .toUpperCase above
 console.log(Uppers);
    if(Uppers === "YES"|| Uppers === "Y"){
      Uppers = "YES";
      window.alert("Noted");
      console.log(Uppers);
      list += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      console.log(list);
      return true;
    } else if(Uppers === "NO" || Uppers === "N"){
      window.alert("Noted");
      Uppers = "NO";
       console.log(Uppers);
       return false;
    }else {
      window.alert("You need to only put Yes or No.");
      UpperCase();
    }
    

};
function LowerCase(){

  var Lowers = window.prompt("Do you want Lowercase letters in it? Y/N");
 Lowers = Lowers.toUpperCase(); //I believe this may be uneeded due to the .toUpperCase above
 console.log(Lowers);
    if(Lowers === "YES"|| Lowers === "Y"){
      Lowers = "YES";
      window.alert("Noted");
      console.log(Lowers);
      list += 'abcdefghijklmnopqrstuvwxyz';
      console.log(list);
       return true;
    } else if(Lowers === "NO" || Lowers === "N"){
      window.alert("Noted");
      Lowers = "NO";
       console.log(Lowers);
       return false;
    }else {
      window.alert("You need to only put Yes or No.");
      LowerCase();
    }
};
function Numbers(){
  let Numberz = window.prompt("Do you want to include numbers in the array? Y/N ");
  Numberz = Numberz.toUpperCase();
  console.log(Numberz);
     if(Numberz === "YES"|| Numberz === "Y"){
       Numberz = "YES";
       window.alert("Noted");
       console.log(Numberz);
       list += '1234567890';
       console.log(list);
       return true;
     } else if(Numberz === "NO" || Numberz === "N"){
       window.alert("Noted");
       Numberz = "NO";
        console.log(Numberz);
        return false;
     }else {
       window.alert("You need to only put Yes or No.");
       Numbers();
     }
};
function specials(){
  var special = window.prompt("Do you want special characters? Yes/No.");
  special = special.toUpperCase(); //I believe this may be uneeded due to the .toUpperCase above
 console.log(special);
    if(special === "YES"|| special === "Y"){
      special = "YES";
      window.alert("Noted");
      console.log(special);
      list += ' !@#$%^&*()"\':;()-_=+`~,<.>/?[]{}\\';
      console.log(list);
       return true;
    } else if(special === "NO" || special === "N"){
      window.alert("Noted");
      special = "NO";
       console.log(special);
       return false;
    }else {
      window.alert("You need to only put Yes or No.");
      specials();
    }
};
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
          break;
        } else {
          range();
          break;
        } 
      }
      return length;
    };
function generatePassword(){
  let password = "";
  UpperCase();
  LowerCase();
  Numbers();
  specials();
 var length = range();
 console.log(list);
console.log(password);
  for(let i=0; i<length; i++){
      password += list.charAt(
        Math.floor(Math.random() * list.length));
        }
        console.log(password);
        return password;
      }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
