// Main Function 
function milePace(miles, duration) {

  let TimeInSecond= convertMinInSecond (duration);
  if((TimeInSecond / miles) % 60 == 0){
    let min = returnNumberWithTwoDigit((TimeInSecond / miles)/60);
    return `${min}:00` 
  }


  let second = returnNumberWithTwoDigit(Math.floor(((TimeInSecond / miles) ) % 60 ))
  let min_ = returnNumberWithTwoDigit(Math.floor((((TimeInSecond / miles) )  - second) / 60));

  return `${min_}:${second}`
  
}

// MY OWN HELP FUNCTION  

function convertMinInSecond(duration){

  let minToSecond = (duration.split(':')[0]) * 60 ;
  let secondValue = duration.split(':')[1]
return  parseInt(minToSecond) + parseInt(secondValue)

}
 
 function returnNumberWithTwoDigit (number)
 {
    //padStart (2,'0') : add 0 before string until string length = 2 
   return number.toString().padStart(2,'0')
 }