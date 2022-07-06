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
function UpperCase(){
  var Uppers = window.prompt("Do you want Uppercase letters in it? Y/N");
 Uppers = Uppers.toUpperCase(); //I believe this may be uneeded due to the .toUpperCase above
 console.log(Uppers);
  while(Uppers != "YES" && Uppers != "NO"){
    if(Uppers === "YES"|| Uppers === "Y"){
      Uppers = "YES";
      window.alert("Noted");
      console.log(Uppers);
      return true;
      break;
    } else if(Uppers === "NO" || Uppers === "N"){
      window.alert("Noted");
      Uppers = "NO";
       Choices.ups = false;
       console.log(Uppers);
       return false;
       break;
    }else {
      window.alert("You need to only put Yes or No.");
      UpperCase();
      break;
    }
    
  }

};
function LowerCase(){

  var Lowers = window.prompt("Do you want Lowercase letters in it? Y/N");
 Lowers = Lowers.toUpperCase(); //I believe this may be uneeded due to the .toUpperCase above
 console.log(Lowers);
  while(Lowers != "YES" && Lowers != "NO"){
    if(Lowers === "YES"|| Lowers === "Y"){
      Lowers = "YES";
      window.alert("Noted");
      console.log(Lowers);
       return true;
      break;
    } else if(Lowers === "NO" || Lowers === "N"){
      window.alert("Noted");
      Lowers = "NO";
       Choices.lows = false;
       console.log(Lowers);
       return false;
       break;
    }else {
      window.alert("You need to only put Yes or No.");
      LowerCase();
      break;
    }
    
  }

};
function Numbers(){
  let Numberz = window.prompt("Do you want to include numbers in the array? Y/N ");
  Numberz = Numberz.toUpperCase();
  console.log(Numberz);
   while(Numberz != "YES" && Numberz != "NO"){
     if(Numberz === "YES"|| Numberz === "Y"){
       Numberz = "YES";
       window.alert("Noted");
       console.log(Numberz);
       return true;
       break;
     } else if(Numberz === "NO" || Numberz === "N"){
       window.alert("Noted");
       Numberz = "NO";
        Choices.nums = false;
        console.log(Numberz);
        return false;
        break;
     }else {
       window.alert("You need to only put Yes or No.");
       Numbers();
       break;
     }
     
   }

};
function specials(){
  var special = window.prompt("Do you want special characters? Yes/No.");
  special = special.toUpperCase(); //I believe this may be uneeded due to the .toUpperCase above
 console.log(special);
  while(special != "YES" && special != "NO"){
    if(special === "YES"|| special === "Y"){
      special = "YES";
      window.alert("Noted");
      console.log(special);
       return true;
      break;
    } else if(special === "NO" || Lowers === "N"){
      window.alert("Noted");
      special = "NO";
       Choices.specs = false;
       console.log(special);
       return false;
       break;
    }else {
      window.alert("You need to only put Yes or No.");
      specials();
      break;
    }
    
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
          console.log(Choices);
          break;
        } else {
          range();
          break;
        } 
      }
      return length;
    };
function generatePassword(){
  var password = "";
  var list = ' ';
  var indexes = 0;
  UpperCase();
  if(UpperCase){
    list += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    indexes++;
  }
  LowerCase();
  if(LowerCase){
    list += 'abcdefghijklmnopqrstuvwxyz';
    indexes++;

  }
  Numbers();
  if(Numbers){
    list += '1234567890';
    indexes++
  }
  specials();
  if(specials){
    list += ' !@#$%^&*()"\':;()-_=+`~,<.>/?[]{}\\';
    indexes++;
  }
  range();
console.log(list);
  for(i=0; i<length; i++){
      password += list.charAt(
        Math.floor(Math.random() * list.length)
      );
    }
    
return password;
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
