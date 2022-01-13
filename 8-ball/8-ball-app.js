let userName ="Jen";
userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");

let userQuestion ="Does he love me";
console.log(`${userName} wants to know: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch(randomNumber) {
  case 0 :
  eightBall ="It is certain";
  break;
  case 1 :
  eightBall = "It is decidedly so";
  break;
  case 2 :
  eightBall ="Reply hazy. Try again";
  break;
  case 3 :
  eightBall = "Cannot predict now";
  break;
  case 4 :
  eightBall = "Do not count on it";
  break;
  case 5 :
  eightBall = "My sources say no";
  break;
  case 6 :
  eightBall = "Outlook not so good";
  break;
  case 7 :
  eightBall ="Signs point to yes";
  break;
  default :
  eightBall = "This 8-ball is broken";
  break;
}

console.log(`The 8-ball answered: ${eightBall}`);