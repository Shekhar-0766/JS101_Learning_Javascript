// Given stored username and password and input username and password, Print if the user can login or not.

let stored_email = "abc@gmail.com";
let stored_pass = "abcdef";

let input_email = "abc@gmail.com";
let input_pass = "abcdef";

if(stored_email == input_email){
  if(stored_pass == input_pass){
    console.log("Login successful");
  }
  else{
    console.log("Wrong Password");
  }
}
else{
  console.log("Invalid Credential");
}