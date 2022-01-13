const getSleepHours = day => {
    switch(day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 5;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
        return 11;
        break;
      case 'sunday':
        return 12;
        break; 
    
      default:
        return "Error!"  
    }
    };
    
    const getActualSleepHours = () => 
       getSleepHours('monday')
      + getSleepHours('tuesday')
      +getSleepHours('wednesday')
      +getSleepHours('thursday')
      +getSleepHours('friday')
      +getSleepHours('saturday')
      +getSleepHours('sunday');
    
    const getIdealSleepHours = () => {
      let idealHours = 8;
      return idealHours * 7;
    };
    
    const calculateSleepDebt = () => {
      let actualSleepHours = getActualSleepHours();
      let idealSleepHours = getIdealSleepHours();
    
    
    if (actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep');
    } 
    else if 
      (actualSleepHours > idealSleepHours){
        console.log("You got" + (actualSleepHours - idealSleepHours) +  "more hours of sleep this week");
      }
       else if
        (actualSleepHours < idealSleepHours){
          console.log("You should get some rest! You slept " + (idealSleepHours -actualSleepHours) +" hours less than you need this week");
        }
        else {
          console.log('error');
        }
    
     
    };
    calculateSleepDebt()