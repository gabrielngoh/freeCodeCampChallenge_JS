// Main Function 

function fibonacciSequence(startSequence, length) {
  
  if (!isNaN(length))
   return result(startSequence, length)
  
}


function fibonnaciTable (startSequence,length){
let sum = 0;
  for (let i = 2; i<length ;i+=1){
      sum=startSequence[i-2]+startSequence[i-1];
      startSequence.push(sum);
  }
  return startSequence;
}

function result (startSequence,length){
  switch(length){
    case 0 : return [];
    break;
    case 1 : return [startSequence[0]];
    break;
    case 2 : return [startSequence[0], startSequence[1]];
    break;
    default:return fibonnaciTable(startSequence , length);
       
  }
}
