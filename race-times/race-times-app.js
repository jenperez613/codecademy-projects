let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = true;

let runnerAge = 18;

if (regEarly = true && runnerAge > 18)
{
  raceNumber += 1000;
}

if (regEarly = true && runnerAge > 18){
  console.log(`Your race number is ${raceNumber} and you will race at 9:30 am`);
} else if (regEarly =false && runnerAge > 18){
  console.log(`Your race number is  ${raceNumber} and you will race at 11:00 am`);} else if (runnerAge < 18) {
    console.log(`Your race number is  ${raceNumber} and you will race at 12:30 pm`);} else {
      console.log("Please see registration desk for your race number and start time");
    }